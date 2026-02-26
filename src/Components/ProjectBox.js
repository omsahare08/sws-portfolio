import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * ProjectBox now receives a single `project` prop (object) instead of
 * individual props, making it easier to scale.
 *
 * project = { name, github, demo, desc, tags, image? }
 */
const ProjectBox = ({ project }) => {
  const { name, github, demo, desc, tags = [], image } = project;

  return (
    <div className="projectBox">
      {/* ── Thumbnail ── */}
      {image ? (
        <img className="projectPhoto" src={image} alt={`${name} preview`} />
      ) : (
        <div className="projectPhotoPlaceholder">
          <span>{name.charAt(0)}</span>
        </div>
      )}

      {/* ── Content ── */}
      <div className="projectContent">
        <h3 className="projectName">{name}</h3>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="projectTags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="projectDesc">{desc}</p>

        {/* Buttons */}
        <div className="projectBtns">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <button className="projectbtn">
                <FaGithub /> GitHub
              </button>
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              <button className="projectbtn demo">
                <FaExternalLinkAlt /> Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;