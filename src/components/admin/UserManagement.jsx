import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, role }),
    });
    if (res.ok) {
      const newUser = await res.json();
      setUsers([...users, newUser]);
      setUsername("");
    }
  };

  const handleRoleChange = async (id, newRole) => {
    const res = await fetch(`${API_BASE_URL}/api/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: newRole }),
    });
    if (res.ok) {
      setUsers(users.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Create</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() =>
                    handleRoleChange(
                      user.id,
                      user.role === "admin" ? "user" : "admin"
                    )
                  }
                >
                  Toggle Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
