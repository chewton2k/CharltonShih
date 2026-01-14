import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./MarkdownViewer.css";

/**
 * MarkdownViewer - Renders GitHub-flavored Markdown with dark theme styling
 * Lightweight implementation without external dependencies
 */

/**
 * Simple markdown parser that converts markdown text to React elements
 */
const parseMarkdown = (text) => {
  if (!text) return null;

  const lines = text.split("\n");
  const elements = [];
  let currentList = [];
  let inCodeBlock = false;
  let codeContent = [];
  let codeLanguage = "";

  const processInlineMarkdown = (line, key) => {
    // Process inline elements: bold, italic, code, links
    const parts = [];
    let remaining = line;
    let partIndex = 0;

    // Process inline code first
    remaining = remaining.replace(/`([^`]+)`/g, (match, code) => {
      return `{{INLINE_CODE_${partIndex++}:${code}}}`;
    });

    // Process bold
    remaining = remaining.replace(/\*\*([^*]+)\*\*/g, (match, text) => {
      return `{{BOLD_${partIndex++}:${text}}}`;
    });

    // Process italic
    remaining = remaining.replace(/\*([^*]+)\*/g, (match, text) => {
      return `{{ITALIC_${partIndex++}:${text}}}`;
    });

    // Process links - both internal and external
    remaining = remaining.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      return `{{LINK_${partIndex++}:${text}::${url}}}`;
    });

    // Now split and render
    const tokens = remaining.split(/({{[^}]+}})/);

    return tokens.map((token, i) => {
      if (token.startsWith("{{INLINE_CODE_")) {
        const content = token.match(/{{INLINE_CODE_\d+:(.+)}}/)?.[1];
        return <code key={`${key}-inline-${i}`} className="markdown-viewer__inline-code">{content}</code>;
      }
      if (token.startsWith("{{BOLD_")) {
        const content = token.match(/{{BOLD_\d+:(.+)}}/)?.[1];
        return <strong key={`${key}-bold-${i}`}>{content}</strong>;
      }
      if (token.startsWith("{{ITALIC_")) {
        const content = token.match(/{{ITALIC_\d+:(.+)}}/)?.[1];
        return <em key={`${key}-italic-${i}`}>{content}</em>;
      }
      if (token.startsWith("{{LINK_")) {
        const match = token.match(/{{LINK_\d+:(.+)::(.+)}}/);
        if (match) {
          const [, text, url] = match;
          // Check if internal link (starts with /)
          if (url.startsWith("/")) {
            return (
              <Link key={`${key}-link-${i}`} to={url} className="markdown-viewer__link">
                {text}
              </Link>
            );
          }
          return (
            <a
              key={`${key}-link-${i}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="markdown-viewer__link"
            >
              {text}
            </a>
          );
        }
      }
      return token;
    });
  };

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="markdown-viewer__list">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, index) => {
    // Code blocks
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${index}`} className="markdown-viewer__code-block">
            <code className={codeLanguage ? `language-${codeLanguage}` : ""}>
              {codeContent.join("\n")}
            </code>
          </pre>
        );
        codeContent = [];
        codeLanguage = "";
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
      }
      return;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      return;
    }

    // Headers
    if (line.startsWith("# ")) {
      flushList();
      elements.push(
        <h1 key={index} className="markdown-viewer__h1">
          {processInlineMarkdown(line.slice(2), index)}
        </h1>
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={index} className="markdown-viewer__h2">
          {processInlineMarkdown(line.slice(3), index)}
        </h2>
      );
      return;
    }

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={index} className="markdown-viewer__h3">
          {processInlineMarkdown(line.slice(4), index)}
        </h3>
      );
      return;
    }

    // Tables
    if (line.startsWith("|") && line.endsWith("|")) {
      // Simple table handling - skip for now, convert to list
      return;
    }

    // Horizontal rule
    if (line === "---" || line === "***") {
      flushList();
      elements.push(<hr key={index} className="markdown-viewer__hr" />);
      return;
    }

    // List items
    if (line.match(/^[\s]*[-*]\s/)) {
      const content = line.replace(/^[\s]*[-*]\s/, "");
      currentList.push(
        <li key={`li-${index}`} className="markdown-viewer__list-item">
          {processInlineMarkdown(content, index)}
        </li>
      );
      return;
    }

    // Empty line
    if (line.trim() === "") {
      flushList();
      return;
    }

    // Paragraph
    flushList();
    elements.push(
      <p key={index} className="markdown-viewer__paragraph">
        {processInlineMarkdown(line, index)}
      </p>
    );
  });

  flushList();
  return elements;
};

const MarkdownViewer = ({ content, fileName }) => {
  const renderedContent = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div className="markdown-viewer">
      <div className="markdown-viewer__header">
        <svg
          className="markdown-viewer__file-icon"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
        </svg>
        <span className="markdown-viewer__file-name">{fileName}</span>
      </div>
      <div className="markdown-viewer__content">{renderedContent}</div>
    </div>
  );
};

export default MarkdownViewer;
