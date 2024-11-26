// src/api/userApi.js

let users = [
  {
    id: 2,
    name: "Regular User",
    email: "regular@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    status: "Active",
  },
  {
    id: 6,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Eve Adams",
    email: "eve.adams@example.com",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Frank Castle",
    email: "frank.castle@example.com",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Grace Hopper",
    email: "grace.hopper@example.com",
    status: "Active",
  },
];

// Simulate an API call to get users
export const getUsers = () =>
  new Promise((resolve) => setTimeout(() => resolve(users), 300));

// Simulate an API call to add a user
export const addUser = (user) =>
  new Promise((resolve) => {
    users.push({ id: users.length + 1, ...user });
    // setTimeout(() => resolve(users), 300);
  });

// Simulate an API call to edit a user
export const editUser = (id, updatedUser) =>
  new Promise((resolve) => {
    users = users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    setTimeout(() => resolve(users), 300);
  });

// Simulate an API call to delete a user
export const deleteUser = (id) =>
  new Promise((resolve) => {
    users = users.filter((user) => user.id !== id);
    setTimeout(() => resolve(users), 300);
  });
