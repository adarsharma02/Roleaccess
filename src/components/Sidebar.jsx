import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarStyle = {
    height: "100vh",
    width: "250px",
    backgroundColor: "#343a40",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: "20px",
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "10px 20px",
    margin: "10px 0",
    borderRadius: "5px",
    width: "90%",
    textAlign: "left",
  };

  const activeLinkStyle = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={sidebarStyle}>
      <h2>RoleAccess</h2>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/users"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
        }
      >
        Manage Users
      </NavLink>
      <NavLink
        to="/roles"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
        }
      >
        Manage Roles
      </NavLink>
    </div>
  );
};

export default Sidebar;
