import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./NavBar.css";

function NavBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  console.log(auth);

  return (
    <div>
      <nav>
        <Link to="/">
          <img src="/Images/icon-home.png" alt="Home" className="nav-icon" />
          Home
        </Link>
        <Link to="/about">
          <img src="/Images/icon-about.png" alt="About" className="nav-icon" />
          About Page
        </Link>
        <Link to="/newproject">
          <img
            src="/Images/icon-newproject.png"
            alt="New Project"
            className="nav-icon"
          />
          New Project
        </Link>
        <Link to="/contact">
          <img
            src="/Images/icon-contact.png"
            alt="Contact"
            className="nav-icon"
          />
          Contact Page
        </Link>
        <Link to="/signup">
          <img
            src="/Images/icon-signup.png"
            alt="SignUp"
            className="nav-icon"
          />
          Sign Up
        </Link>
        {auth.token ? (
          <Link to="/" onClick={handleLogout}>
            <img
              src="/Images/icon-logout.png"
              alt="Logout"
              className="nav-icon"
            />
            Log Out
          </Link>
        ) : (
          <Link to="/login">
            <img
              src="/Images/icon-login.png"
              alt="Login"
              className="nav-icon"
            />
            Log In
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
