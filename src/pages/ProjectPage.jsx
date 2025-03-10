import React from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../data";
import PledgeForm from "../components/PledgeForm";
import "./ProjectPage.css";

function ProjectPage() {
  const { id } = useParams();

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
      <img
        src="/images/icon-divider.svg"
        alt="divider"
        className="icon-divider"
      />
      <h2>Make a Pledge</h2>
      <PledgeForm projectId={project.id} />
    </div>
  );
}

export default ProjectPage;
