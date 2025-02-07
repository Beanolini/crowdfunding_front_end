import NewProjectForm from "../components/NewProjectForm";
import "./NewProjectPage.css";

function NewProjectPage() {
  return (
    <div>
      <div className="header-box">
        <h1>Create a New Project</h1>
        <img
          src="/images/icon-divider.svg"
          alt="divider"
          className="icon-divider"
        />
        <NewProjectForm />
      </div>
    </div>
  );
}

export default NewProjectPage;
