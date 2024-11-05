import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, techStack, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Tech Stack:</strong> {techStack.join(", ")}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
