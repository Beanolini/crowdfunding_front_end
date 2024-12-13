import React from "react";
import "../components/LoginForm.css"; // Corrected path to LoginForm.css

function LoginForm() {
  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
