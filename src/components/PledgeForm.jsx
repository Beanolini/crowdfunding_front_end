import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import postPledge from "../api/post-pledge.js";

export const Checkbox = () => {
  const handleChange = () => {
    console.log("The checkbox was toggled");
  };

  return <input type="checkbox" onChange={handleChange} />;
};

function PledgeForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [pledgeDetails, setPledgeDetails] = useState({
    amount: "",
    project: "",
    anonymous: false,
    comment: "",
  });

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setPledgeDetails((prevPledgeDetails) => ({
      ...prevPledgeDetails,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button function running", pledgeDetails);
    if (
      pledgeDetails.amount &&
      pledgeDetails.project &&
      pledgeDetails.comment
    ) {
      postPledge(
        pledgeDetails.amount,
        pledgeDetails.project,
        pledgeDetails.anonymous,
        pledgeDetails.comment
      ).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="project">Project:</label>
        <select
          id="project"
          value={pledgeDetails.project}
          onChange={handleChange}
        >
          <option value="">Select a Project</option>
          <option value="Gowrick Greatflower">Gowrick Greatflower</option>
          <option value="Anyas Nightsun">Anyas Nightsun</option>
          <option value="Kasumo Sunmeadow">Kasumo Sunmeadow</option>
          <option value="Roslyse Nimbleflow">Roslyse Nimbleflow</option>
          <option value="Hanys Teafoot">Hanys Teafoot</option>
          <option value="Antran Shadowspell">Antran Shadowspell</option>
          <option value="Zefara Bronzetopple">Zefara Bronzetopple</option>
        </select>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="anonymous" onChange={handleChange} />
        <label htmlFor="anonymous">Anonymous</label>
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Comment"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PledgeForm;
