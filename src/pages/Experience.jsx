// src/components/Experience.js
import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      details:
        "Developed responsive web applications using React and JavaScript.",
    },
    {
      role: "Web Designer",
      company: "Creative Labs",
      duration: "2019 - 2021",
      details: "Designed and implemented user interfaces for various projects.",
    },
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <span>{experience.duration}</span>
            <p>{experience.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
