import React, { useRef } from "react";
import "./FileTree.css";

/**
 * FileTree - GitHub-style file explorer with folders and files
 * Supports keyboard navigation and accessible row interactions
 */

// Folder icon SVG
const FolderIcon = () => (
  <svg
    className="file-tree__icon file-tree__icon--folder"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z" />
  </svg>
);

// File icon SVG (for markdown files)
const FileIcon = () => (
  <svg
    className="file-tree__icon file-tree__icon--file"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
  </svg>
);

// Go back icon (for parent folder)
const GoBackIcon = () => (
  <svg
    className="file-tree__icon file-tree__icon--back"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" />
  </svg>
);

const FileTreeRow = ({
  item,
  onClick,
  onKeyDown,
  isGoBack,
  tabIndex,
  innerRef,
}) => {
  const isFolder = item.type === "folder";

  return (
    <div
      className={`file-tree__row ${isGoBack ? "file-tree__row--go-back" : ""}`}
      onClick={() => onClick(item)}
      onKeyDown={(e) => onKeyDown(e, item)}
      role="row"
      tabIndex={tabIndex}
      ref={innerRef}
      aria-label={isGoBack ? "Go to parent folder" : item.name}
    >
      <div className="file-tree__cell file-tree__cell--icon" role="gridcell">
        {isGoBack ? (
          <GoBackIcon />
        ) : isFolder ? (
          <FolderIcon />
        ) : (
          <FileIcon />
        )}
      </div>
      <div className="file-tree__cell file-tree__cell--name" role="gridcell">
        <span className="file-tree__name">{item.name}</span>
      </div>
      <div className="file-tree__cell file-tree__cell--message" role="gridcell">
        <span className="file-tree__message">{item.lastCommit || ""}</span>
      </div>
      <div className="file-tree__cell file-tree__cell--date" role="gridcell">
        <span className="file-tree__date">{item.lastCommitDate || ""}</span>
      </div>
    </div>
  );
};

const FileTree = ({ items, onItemClick, showGoBack, onGoBack }) => {
  const rowRefs = useRef([]);
  const allItems = showGoBack
    ? [{ name: "..", type: "folder", isGoBack: true }, ...items]
    : items;

  const handleKeyDown = (e, item, index) => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (item.isGoBack) {
          onGoBack();
        } else {
          onItemClick(item);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (index < allItems.length - 1) {
          rowRefs.current[index + 1]?.focus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (index > 0) {
          rowRefs.current[index - 1]?.focus();
        }
        break;
      default:
        break;
    }
  };

  const handleClick = (item) => {
    if (item.isGoBack) {
      onGoBack();
    } else {
      onItemClick(item);
    }
  };

  return (
    <div className="file-tree" role="grid" aria-label="Repository files">
      <div className="file-tree__header" role="row">
        <div className="file-tree__header-cell" role="columnheader">
          Name
        </div>
        <div className="file-tree__header-cell" role="columnheader">
          Last commit message
        </div>
        <div className="file-tree__header-cell" role="columnheader">
          Last commit date
        </div>
      </div>
      <div className="file-tree__body" role="rowgroup">
        {allItems.map((item, index) => (
          <FileTreeRow
            key={item.isGoBack ? "go-back" : item.name}
            item={item}
            onClick={handleClick}
            onKeyDown={(e) => handleKeyDown(e, item, index)}
            isGoBack={item.isGoBack}
            tabIndex={index === 0 ? 0 : -1}
            innerRef={(el) => (rowRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default FileTree;
