import React from "react";
import SignUpForm from "./SignUpForm.jsx";
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="signup-container">
      <h1>Create a New Account</h1>
      <div className="signup-form-container">
      <SignUpForm /> {/* Render the SignUpForm component */}
    </div>
  </div>
  );
}

export default SignUpPage;
