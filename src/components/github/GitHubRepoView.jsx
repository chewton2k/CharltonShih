import React, { useState, useCallback, useMemo } from "react";
import RepoHeader from "./RepoHeader";
import Breadcrumbs from "./Breadcrumbs";
import FileTree from "./FileTree";
import MarkdownViewer from "./MarkdownViewer";
import { projects, repoConfig, rootFiles, getProjectById } from "../../data/projects";
import "./GitHubRepoView.css";

/**
 * GitHubRepoView - Main container orchestrating the GitHub repository UI
 * Manages navigation state and renders appropriate content
 */
const GitHubRepoView = () => {
  // Navigation state
  const [currentPath, setCurrentPath] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Determine what we're viewing based on path
  const currentView = useMemo(() => {
    if (currentPath.length === 0) {
      // Root level - show all projects as folders
      return { type: "root", content: null };
    }

    const projectId = currentPath[0];
    const project = getProjectById(projectId);

    if (!project) {
      return { type: "root", content: null };
    }

    if (currentPath.length === 1) {
      // Inside a project folder
      return { type: "project", content: project };
    }

    // Viewing a specific file
    const fileName = currentPath[1];
    if (fileName === "README.md") {
      return { type: "file", content: project.readme, fileName: "README.md", project };
    }
    if (fileName === "STACK.md") {
      return { type: "file", content: project.stack, fileName: "STACK.md", project };
    }

    return { type: "project", content: project };
  }, [currentPath]);

  // Build file tree items based on current view
  const fileTreeItems = useMemo(() => {
    if (currentView.type === "root") {
      // Show all projects as folders + root README
      const projectFolders = projects.map((project) => ({
        name: project.name,
        type: "folder",
        id: project.id,
        lastCommit: project.lastCommit,
        lastCommitDate: project.lastCommitDate,
      }));

      const files = rootFiles.map((file) => ({
        ...file,
        lastCommit: "Initial commit",
        lastCommitDate: "2 months ago",
      }));

      return [...projectFolders, ...files];
    }

    if (currentView.type === "project") {
      // Show README.md and STACK.md
      return [
        {
          name: "README.md",
          type: "file",
          lastCommit: currentView.content.lastCommit,
          lastCommitDate: currentView.content.lastCommitDate,
        },
        {
          name: "STACK.md",
          type: "file",
          lastCommit: "Add tech stack",
          lastCommitDate: currentView.content.lastCommitDate,
        },
      ];
    }

    return [];
  }, [currentView]);

  // Handle item click in file tree
  const handleItemClick = useCallback(
    (item) => {
      if (item.type === "folder") {
        // Navigate into folder
        if (currentPath.length === 0) {
          setCurrentPath([item.id || item.name]);
          setSelectedFile(null);
        }
      } else if (item.type === "file") {
        // View file
        if (currentPath.length === 0) {
          // Root level file (README.md)
          setSelectedFile({ name: item.name, content: rootFiles[0].content });
        } else {
          // Project level file
          setCurrentPath([...currentPath, item.name]);
          setSelectedFile(item);
        }
      }
    },
    [currentPath]
  );

  // Handle breadcrumb navigation
  const handleBreadcrumbNavigate = useCallback((newPath) => {
    setCurrentPath(newPath);
    setSelectedFile(null);
  }, []);

  // Handle go back
  const handleGoBack = useCallback(() => {
    if (currentPath.length > 0) {
      setCurrentPath(currentPath.slice(0, -1));
      setSelectedFile(null);
    }
  }, [currentPath]);

  // Determine if we should show the README preview at root
  const showRootReadme = currentView.type === "root" && selectedFile;

  // Get content for markdown viewer
  const markdownContent = useMemo(() => {
    if (currentView.type === "file") {
      return { content: currentView.content, fileName: currentView.fileName };
    }
    if (showRootReadme) {
      return { content: selectedFile.content, fileName: selectedFile.name };
    }
    // Auto-show README.md when entering a project
    if (currentView.type === "project") {
      return { content: currentView.content.readme, fileName: "README.md" };
    }
    // Show root README by default
    if (currentView.type === "root") {
      return { content: rootFiles[0].content, fileName: "README.md" };
    }
    return null;
  }, [currentView, selectedFile, showRootReadme]);

  return (
    <div className="github-repo-view">
      <RepoHeader
        repoName={repoConfig.name}
        fullName={repoConfig.fullName}
        visibility={repoConfig.visibility}
        branch={repoConfig.defaultBranch}
      />

      <Breadcrumbs
        repoName="projects"
        path={currentPath}
        onNavigate={handleBreadcrumbNavigate}
      />

      <div className="github-repo-view__content">
        {currentView.type !== "file" && (
          <FileTree
            items={fileTreeItems}
            onItemClick={handleItemClick}
            showGoBack={currentPath.length > 0}
            onGoBack={handleGoBack}
          />
        )}

        {markdownContent && (
          <MarkdownViewer
            content={markdownContent.content}
            fileName={markdownContent.fileName}
          />
        )}
      </div>
    </div>
  );
};

export default GitHubRepoView;
