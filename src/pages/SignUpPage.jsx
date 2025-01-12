import React from "react";
import SignUpForm from "../components/SignUpForm";
import "../components/SignUpForm.css";

function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Create a New Account</h1>{" "}
        {/* Move this heading inside the form container */}
        <SignUpForm /> {/* Render the SignUpForm component */}
      </div>
    </div>
  );
}

export default SignUpPage;
