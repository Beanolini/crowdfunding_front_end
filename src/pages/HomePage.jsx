import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { projects } = useProjects();

  useEffect(() => {
    // Simulate an async operation (e.g., data fetch) and hide the loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as necessary

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="home-page">
      <div className="header-box">
        <h1>Help a Halfling</h1>
        <img
          src="/images/icon-sweetdreams.svg"
          alt="Big Dreams Icon"
          className="nav-icon"
        />
        <p>Little Folk. Big Dreams.</p>
      </div>
      <div id="project-list">
        {projects.map((projectData, key) => (
          <ProjectCard key={key} projectData={projectData} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
