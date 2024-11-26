import React, { useEffect, useState } from "react";
// import { getUsers, addUser, editUser, deleteUser } from "../mockApi/userApi";
import Sidebar from "../components/Sidebar";
const LOCAL_STORAGE_KEY = "users"; // Key for localStorage

const UserManagement = () => {
  const [users, setUsers] = useState([]); // User list
  const [newUser, setNewUser] = useState({ name: "", email: "" }); // New user form
  const [editingUserId, setEditingUserId] = useState(null); // Track editing state
  const [editedUser, setEditedUser] = useState({ name: "", email: "" }); // Data for editing

  useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setUsers(storedUsers);
  }, []);

  // Save users to localStorage
  const saveUsersToLocalStorage = (updatedUsers) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  // Fetch users on component load
  // useEffect(() => {
  //   getUsers().then(setUsers);
  // }, []);

  // Add a new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const updatedUsers = [
        ...users,
        { id: Date.now(), ...newUser, status: "Active" },
      ];
      saveUsersToLocalStorage(updatedUsers);
      setNewUser({ name: "", email: "" });
    }
  };

  // Delete a user
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    saveUsersToLocalStorage(updatedUsers);
  };

  // Save the edited user's data
  const handleSaveEdit = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...editedUser } : user
    );
    saveUsersToLocalStorage(updatedUsers);
    setEditingUserId(null); // Exit editing mode
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

  const inputStyle = {
    padding: "8px",
    width: "200px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  };

  const userListStyle = {
    listStyle: "none",
    padding: 0,
  };

  const userListItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    borderBottom: "1px solid #ccc",
  };

  const statusDotStyle = (status) => ({
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: status === "Active" ? "green" : "red",
  });

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
  };

  return (
    <div style={containerStyle}>
      <Sidebar />
      <h2 style={headingStyle}>User Management Dashboard</h2>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          style={inputStyle}
        />
        <button onClick={handleAddUser} style={buttonStyle}>
          Add User
        </button>
      </div>

      <ul style={userListStyle}>
        {users.map((user) => (
          <li key={user.id} style={userListItemStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={statusDotStyle(user.status)}></div>
              {editingUserId === user.id ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                    style={{ padding: "5px", width: "150px" }}
                  />
                  <input
                    type="email"
                    value={editedUser.email}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                    style={{ padding: "5px", width: "200px" }}
                  />
                </div>
              ) : (
                <>
                  <span style={{ fontWeight: "bold" }}>{user.name}</span>
                  <span style={{ color: "#555" }}>({user.email})</span>
                </>
              )}
            </div>
            <div style={buttonGroupStyle}>
              {editingUserId === user.id ? (
                <button
                  onClick={() => handleSaveEdit(user.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingUserId(user.id);
                    setEditedUser({ name: user.name, email: user.email });
                  }}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDeleteUser(user.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
