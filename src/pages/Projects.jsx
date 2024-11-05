// src/pages/Projects.js
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "Description of your first project.",
      techStack: ["React", "CSS", "API"],
      link: "#",
    },
    // Add more projects here
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
