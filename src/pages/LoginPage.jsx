import React from "react";
import "./LoginPage.css";

function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

function LoginPage() {
  return (
    <div className="login-form-container">
      <h1>Log In</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
