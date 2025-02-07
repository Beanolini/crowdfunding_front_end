import React from "react";
import SignUpForm from "../components/SignUpForm";
import "../components/SignUpForm.css";
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Create a New Account</h1>
        <img
          src="/images/icon-divider.svg"
          alt="divider"
          className="icon-divider"
        />
        <SignUpForm /> {/* Render the SignUpForm component */}
      </div>
    </div>
  );
}

export default SignUpPage;
