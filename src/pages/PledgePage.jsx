import PledgeForm from "../components/PledgeForm";
import "./PledgePage.css";

function PledgePage() {
  return (
    <div>
      <div className="header-box">
        <h1>Pledge Your Support</h1> <PledgeForm />
      </div>
    </div>
  );
}

export default PledgePage;
