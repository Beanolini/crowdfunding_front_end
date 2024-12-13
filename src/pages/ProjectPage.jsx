import React from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../Data"; // Import your data

function ProjectPage() {
  const { id } = useParams(); // Get the project ID from the URL

  // Find the project using the ID
  const project = allProjects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="header-box">
      <h1>{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
      <p>{project.description}</p>
      <p>
        <strong>Goal: </strong>${project.goal}
      </p>
      <p>
        <strong>Status: </strong>
        {project.is_open ? "Open" : "Closed"}
      </p>
      <p>
        <strong>Created on: </strong>
        {new Date(project.date_created).toLocaleDateString()}
      </p>
    </div>
  );
}

export default ProjectPage;
