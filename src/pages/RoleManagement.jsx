import React, { useEffect, useState } from "react";
// import { getUsers, editUser } from "../mockApi/userApi"; // Mock API for user data
import Sidebar from "../components/Sidebar";

const LOCAL_STORAGE_KEY = "users"; // Key for localStorage

const RoleManagement = () => {
  const [users, setUsers] = useState([]); // State to hold user data

  useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setUsers(storedUsers);
  }, []);

  const saveUsersToLocalStorage = (updatedUsers) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };
  // Fetch users on component mount

  // useEffect(() => {
  //   getUsers().then(setUsers);
  // }, []);

  const handleToggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
        : user
    );
    saveUsersToLocalStorage(updatedUsers);
  };

  // Inline styles
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    borderBottom: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#f1f1f1",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const buttonStyle = (status) => ({
    padding: "5px 10px",
    backgroundColor: status === "Active" ? "green" : "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  });

  return (
    <div style={containerStyle}>
      <Sidebar />
      <h2 style={headingStyle}>User List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td
                style={{
                  ...tdStyle,
                  color: user.status === "Active" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                <button
                  onClick={() => handleToggleStatus(user.id)}
                  style={buttonStyle(user.status)}
                >
                  {user.status === "Active" ? "Active" : "Deactive"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
