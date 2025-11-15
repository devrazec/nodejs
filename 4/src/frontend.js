import { io } from "socket.io-client";

const socket = io();

const tbody = document.querySelector("#user-table tbody");

// Listen for new users
socket.on("userCreated", (user) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
  `;
  tbody.appendChild(tr);
});

// Optional: load existing users
async function loadUsers() {
  const res = await fetch("/users");
  const users = await res.json();
  tbody.innerHTML = "";
  users.forEach(u => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${u.id}</td>
      <td>${u.name}</td>
      <td>${u.email}</td>
    `;
    tbody.appendChild(tr);
  });
}

loadUsers();
