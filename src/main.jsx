import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Here we import out pages
import HomePage from "./assets/pages/HomePage.jsx";
import AboutPage from "./assets/pages/AboutPage.jsx";
import ContactPage from "./assets/pages/ContactPage.jsx";
import LoginPage from "./assets/pages/LoginPage.jsx";

// Here we import our components
import NavBar from "./components/NavBar.jsx";

// Here we create our router and tell it whats pages to render at what path
const router = createBrowserRouter([
  // These are the three routes!
  {
    path: "/",
    // Putting our NavBar as the main component will causes the children to render in the <Outlet />
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so the pages render */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
