import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="header-box">
        <h1>Help a Halfling</h1>
        <p>Little Folk. Big Dreams.</p>
        <img
          src="/images/icon-dreams.png"
          alt="Big Dreams Icon"
          className="nav-icon"
        />
      </div>

      <div id="project-list">
        {allProjects.map((projectData, key) => (
          <ProjectCard key={key} projectData={projectData} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
