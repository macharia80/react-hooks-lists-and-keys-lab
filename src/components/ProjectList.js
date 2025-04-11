import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
