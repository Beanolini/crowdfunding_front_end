import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";

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
        <Link to="/newproject">NewProject</Link>
        <Link to="/pledgepage">PledgePage</Link>
        {auth.token ? (
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
