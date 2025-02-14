import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./NavBar.css";

function NavBar() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [burgerMenu, setBurgerMenu] = useState(false); 

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
    navigate("/login");
  };

    const toggleBurgerMenu = () => {
      setBurgerMenu(!burgerMenu); 
    };

  return (
    <div>
    <nav className={`nav ${burgerMenu ? "open" : ""}`}>
        <div className="burger-icon" onClick={toggleBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NavLink to="/" className="nav-link" activeClassName="active">
          <img src="/images/icon-home.png" alt="Home" className="nav-icon" />
          Home
        </NavLink>

        <NavLink to="/about" className="nav-link" activeClassName="active">
          <img src="/images/icon-about.png" alt="About" className="nav-icon" />
          About Page
        </NavLink>

        <NavLink to="/newproject" className="nav-link" activeClassName="active">
          <img
            src="/images/icon-newproject.png"
            alt="New Project"
            className="nav-icon"
          />
          New Project
        </NavLink>

        <NavLink to="/contact" className="nav-link" activeClassName="active">
          <img
            src="/images/icon-contact.png"
            alt="Contact"
            className="nav-icon"
          />
          Contact Page
        </NavLink>

        {!auth.token && (
          <NavLink to="/signup" className="nav-link" activeClassName="active">
            <img
              src="/images/icon-signup.png"
              alt="SignUp"
              className="nav-icon"
            />
            Sign Up
          </NavLink>
        )}

        {auth.token ? (
          <Link to="/" onClick={handleLogout} className="nav-link">
            <img
              src="/images/icon-logout.png"
              alt="Logout"
              className="nav-icon"
            />
            Log Out
          </Link>
        ) : (
          <NavLink to="/login" className="nav-link" activeClassName="active">
            <img
              src="/images/icon-login.png"
              alt="Login"
              className="nav-icon"
            />
            Log In
          </NavLink>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
