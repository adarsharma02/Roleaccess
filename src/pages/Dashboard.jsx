import React from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar from ".components/Sidebar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/users");
  };

  const handleViewerClick = () => {
    navigate("/roles");
  };

  const dashboardContentStyle = {
    marginLeft: "400px", // Offset for sidebar
    padding: "20px",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    color: "#555",
    marginBottom: "30px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    margin: "10px",
    borderRadius: "5px",
    border: "2px solid #007BFF",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div>
      <Sidebar />
      <div style={dashboardContentStyle}>
        <h1 style={headingStyle}>Welcome to RoleAccess</h1>
        <p style={paragraphStyle}>
          This system helps you manage user roles and permissions efficiently.
        </p>
        <div>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#007BFF")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={handleAdminClick}
          >
            Manage Users
          </button>

          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#007BFF")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            onClick={handleViewerClick}
          >
            Manage Roles
          </button>
        </div>
        <section>
          <h2 style={{ marginTop: "30px", color: "#333" }}>Key Features</h2>
          <ul style={{ lineHeight: "1.8", color: "#555" }}>
            <li>Role-based access control</li>
            <li>Manage active/inactive users</li>
            <li>Real-time role updates</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
