import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import postPledge from "../api/post-pledge.js";

function PledgeForm(props) {
  const { projectId } = props; // Receive projectId as a prop
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [pledgeDetails, setPledgeDetails] = useState({
    amount: "",
    project: projectId, // Set projectId from props
    anonymous: false,
    comment: "",
  });

  const [error, setError] = useState(""); // State for storing error messages

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setPledgeDetails((prevPledgeDetails) => ({
      ...prevPledgeDetails,
      [id]: type === "checkbox" ? checked : value,
    }));
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
      )
        .then(() => {
          navigate(`/projects/${pledgeDetails.project}`); // Navigate back to the project page
        })
        .catch((err) => {
          console.error("Failed to create pledge:", err);
          setError(
            "Failed to create pledge. Please check the project and try again."
          );
        });
    } else {
      setError("Please fill in all required fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: "red" }}>{error}</div>}{" "}
        {/* Display error message */}
        {/* Amount Field */}
        <div>
          <label htmlFor="amount">Amount in AUD:</label>
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            value={pledgeDetails.amount}
            onChange={handleChange}
          />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PledgeForm;
