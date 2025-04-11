import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{about}</p>
      <div>
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span> // Unique key based on the technology name.
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
