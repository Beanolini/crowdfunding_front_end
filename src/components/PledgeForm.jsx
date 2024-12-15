import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import postPledge from "../api/post-pledge.js";

function PledgeForm() {
  const navigate = useNavigate();
  const { auth } = useAuth();

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

    if (id === "project") {
      console.log("Selected Project ID:", value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Pledge details on submission:", pledgeDetails);

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
    } else {
      console.error("Please fill in all required fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Amount Field */}
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          value={pledgeDetails.amount}
          onChange={handleChange}
        />
      </div>

      {/* Project Dropdown */}
      <div>
        <label htmlFor="project">Project:</label>
        <select
          id="project"
          value={pledgeDetails.project}
          onChange={handleChange}
        >
          <option value="">Select a Project</option>
          <option value="1">Gowrick Greatflower</option>
          <option value="2">Anyas Nightsun</option>
          <option value="3">Kasumo Sunmeadow</option>
          <option value="4">Roslyse Nimbleflow</option>
          <option value="5">Hanys Teafoot</option>
          <option value="6">Antran Shadowspell</option>
          <option value="7">Zefara Bronzetopple</option>
        </select>
      </div>

      {/* Anonymous Checkbox */}
      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <input
          type="checkbox"
          id="anonymous"
          checked={pledgeDetails.anonymous}
          onChange={handleChange}
        />
      </div>

      {/* Comment Field */}
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Comment"
          value={pledgeDetails.comment}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default PledgeForm;
