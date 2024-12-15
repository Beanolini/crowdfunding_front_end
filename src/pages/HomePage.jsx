import { allProjects } from "../data"; // Importing allProjects
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
import dreamsIcon from "../images/icon-dreams.png";

function HomePage() {
  return (
    <div>
      <div className="header-box">
        <h1>Help a Halfling</h1>
        <p>Little Folk. Big Dreams.</p>
        <img src={dreamsIcon} alt="Big Dreams Icon" className="nav-icon" />
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
