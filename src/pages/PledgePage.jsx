import PledgeForm from "../components/PledgeForm";
import "./PledgePage.css"; // Import the PledgePage styles

function PledgePage() {
  return (
    <div>
      <div className="header-box">
        <h1>Pledge Your Support</h1>{" "}
        {/* You can change this to match your needs */}
        <PledgeForm />
      </div>
    </div>
  );
}

export default PledgePage;
