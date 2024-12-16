import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";

function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      postLogin(credentials.username, credentials.password)
        .then((response) => {
          // Store the token and user info in localStorage after successful login
          window.localStorage.setItem("token", response.token); // Store token in localStorage
          window.localStorage.setItem("userId", response.user_id); // Optionally store userId if needed

          // Update the auth state using the useAuth hook (assuming setAuth is available)
          setAuth({
            token: response.token,
          });

          // Navigate to the homepage or a protected page
          navigate("/");
        })
        .catch((error) => {
          console.error("Login error:", error);
          // Handle the error (e.g., show an error message to the user)
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={credentials.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
