import React from "react";
import "./Breadcrumbs.css";

/**
 * Breadcrumbs - Navigation path within the repository
 */
const Breadcrumbs = ({ repoName, path, onNavigate }) => {
  const pathParts = path.filter(Boolean);

  const handleClick = (index) => {
    if (index === -1) {
      // Root clicked
      onNavigate([]);
    } else {
      // Navigate to specific path
      onNavigate(pathParts.slice(0, index + 1));
    }
  };

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <button
            className="breadcrumbs__link breadcrumbs__link--root"
            onClick={() => handleClick(-1)}
            type="button"
          >
            {repoName}
          </button>
        </li>
        {pathParts.map((part, index) => (
          <li key={index} className="breadcrumbs__item">
            <span className="breadcrumbs__separator">/</span>
            {index === pathParts.length - 1 ? (
              <span className="breadcrumbs__current">{part}</span>
            ) : (
              <button
                className="breadcrumbs__link"
                onClick={() => handleClick(index)}
                type="button"
              >
                {part}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
