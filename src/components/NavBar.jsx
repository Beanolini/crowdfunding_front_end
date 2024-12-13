import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./NavBar.css";
import homeIcon from "../images/icon-home.png";
import aboutIcon from "../images/icon-about.png";
import newprojectIcon from "../images/icon-newproject.png";
import pledgeIcon from "../images/icon-pledge.png";
import contactIcon from "../images/icon-contact.png";
import loginIcon from "../images/icon-login.png";
import logoutIcon from "../images/icon-logout.png";

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
          <img src={homeIcon} alt="Home" className="nav-icon" /> Home
        </Link>
        <Link to="/about">
          <img src={aboutIcon} alt="About" className="nav-icon" /> About Page
        </Link>
        <Link to="/newproject">
          <img src={newprojectIcon} alt="New Project" className="nav-icon" />
          New Project
        </Link>
        <Link to="/pledgepage">
          <img src={pledgeIcon} alt="Pledge Page" className="nav-icon" />
          Pledge Page
        </Link>
        <Link to="/contact">
          <img src={contactIcon} alt="Contact Page" className="nav-icon" />
          Contact Page
        </Link>
        {auth.token ? (
          <Link to="/" onClick={handleLogout}>
            <img src={logoutIcon} alt="Log Out" className="nav-icon" />
            Log Out
          </Link>
        ) : (
          <Link to="/login">
            <img src={loginIcon} alt="Log In" className="nav-icon" />
            Log In
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
