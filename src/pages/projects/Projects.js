import React from "react";
import "../../styles/projects.css";
import ProjectCard from "./ProjectCard";
import ProjectsDetails from "./ProjectDetails";



const Projects = () => {
  return (
    <div id = "projects" className="projects-section">
      <div className="project-title">
        <h2>My Projects</h2>
      </div>
      {ProjectsDetails.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          isLeftAligned={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;
