import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import postPledge from "../api/post-pledge.js";

function PledgeForm({ projectId }) {
  const navigate = useNavigate();
  const { auth } = useAuth(); // Check user authentication
  const [pledgeDetails, setPledgeDetails] = useState({
    amount: null, // Initialize as null
    project: projectId, // Set projectId from props
    anonymous: false,
    comment: null, // Initialize as null
  });

  const [error, setError] = useState(""); // State for storing error messages

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setPledgeDetails((prevPledgeDetails) => ({
      ...prevPledgeDetails,
      [id]: type === "checkbox" ? checked : type === "number" ? +value : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure user is authenticated
    if (!auth) {
      setError("You must be logged in to make a pledge.");
      return;
    }

    console.log("Pledge details on submission:", pledgeDetails);

    // Create a copy of pledgeDetails and remove empty fields
    const submissionData = { ...pledgeDetails };
    if (!submissionData.comment) {
      delete submissionData.comment; // Remove comment if null or empty
    }

    // Ensure amount is valid and project ID is set
    if (submissionData.amount > 0 && submissionData.project) {
      postPledge(
        submissionData.amount,
        submissionData.project,
        submissionData.anonymous,
        submissionData.comment
      )
        .then(() => {
          navigate(`/projects/${submissionData.project}`); // Navigate back to the project page
        })
        .catch((err) => {
          console.error("Failed to create pledge:", err);
          setError(
            "Failed to create pledge. Please check the project and try again."
          );
        });
    } else {
      setError(
        "Please fill in all required fields, and ensure the amount is valid."
      );
    }
  };

  return (
    <div>
      {auth ? (
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
              value={pledgeDetails.amount || ""}
              onChange={handleChange}
              required
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
              value={pledgeDetails.comment || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Please log in to make a pledge.</p>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </div>
  );
}

export default PledgeForm;
