import React from "react";
import "./LoginPage.css";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="login-form-container">
      <h1>Log In</h1>
      <img
        src="/images/icon-divider.svg"
        alt="divider"
        className="icon-divider"
      />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
