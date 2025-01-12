import React from "react";
import SignUpForm from "./SignUpForm";
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="signup-container">
      <h1>Create a New Account</h1>
      <SignUpForm /> {/* Render the SignUpForm component */}
    </div>
  );
}

export default SignUpPage;
