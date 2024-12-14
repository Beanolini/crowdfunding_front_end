import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import postPledge from "../api/post-pledge.js";

function PledgeForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [pledgeDetails, setPledgeDetails] = useState({
    amount: "",
    project: "",
    anonymous: "",
    comment: "",
  });
  console.log(pledgeDetails);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledgeDetails((prevPledgeDetails) => ({
      ...prevPledgeDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button function running", pledgeDetails);
    if (
      pledgeDetails.amount &&
      pledgeDetails.project &&
      pledgeDetails.anonymous &&
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
        <input
          type="text"
          id="project"
          placeholder="Project"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <input
          type="checkbox"
          id="anonymous"
          placeholder="Anonymous"
          onChange={handleChange}
        />
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
