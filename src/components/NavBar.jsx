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
        <Link to="/">Home</Link>
        <Link to="/about">About Page</Link>
        <Link to="/newproject">New Project</Link>
        <Link to="/pledgepage">Pledge Page</Link>
        <Link to="/contact">Contact Page</Link>
        {auth.token ? (
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
