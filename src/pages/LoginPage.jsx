import React from "react";
import "./LoginPage.css";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="login-form-container">
      <h1>Log In</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
