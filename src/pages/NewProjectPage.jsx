import NewProjectForm from "../components/NewProjectForm";
import "./NewProjectPage.css";

function NewProjectPage() {
  return (
    <div>
      <div className="header-box">
        <h1>Create a New Project</h1>
        {/* Removed the icon image */}
        <NewProjectForm />
      </div>
    </div>
  );
}

export default NewProjectPage;
