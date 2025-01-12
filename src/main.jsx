import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Pages
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx"; // Corrected import
import LoginPage from "./pages/LoginPage.jsx";
import NewProjectPage from "./pages/NewProjectPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx"; // Import the ProjectPage
import NotFoundPage from "./pages/NotFoundPage.jsx"; // Optional 404 page

// Import Components
import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/newproject", element: <NewProjectPage /> },
      { path: "/project/:id", element: <ProjectPage /> }, // Dynamic project route
      { path: "*", element: <NotFoundPage /> }, // Catch-all route for 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
