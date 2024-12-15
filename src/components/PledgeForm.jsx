import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import postPledge from "../api/post-pledge.js";

function PledgeForm(props) {
  const { projectId } = props;
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [pledgeDetails, setPledgeDetails] = useState({
    amount: "",
    project: projectId,
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

      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <input
          type="checkbox"
          id="anonymous"
          checked={pledgeDetails.anonymous}
          onChange={handleChange}
        />
      </div>

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
  );
}

export default PledgeForm;
