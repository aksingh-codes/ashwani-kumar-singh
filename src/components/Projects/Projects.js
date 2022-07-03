import React from "react";
import projects from "./data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" class="pattern-dots-sm">
      <div class="container">
        <div className="header">
          <h1>My Recent Works</h1>
          <p>Softwares that users love</p>
        </div>
        <div class="projects-container">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
        <a
          href="https://github.com/aksingh-codes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--quadinary-text-color)" }}
        >
          More Projects{" "}
        </a>
      </div>
    </section>
  );
};

export default Projects;
