import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config"

export default function DiseaseManagement() {
  const [diseases, setDiseases] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/diseases`)
      .then(res => res.json())
      .then(data => setDiseases(data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/api/diseases`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      const newDisease = await res.json();
      setDiseases([...diseases, newDisease]);
      setName("");
    }
  };

  const handleDelete = async (id) => {
    await fetch(`${API_BASE_URL}/api/diseases/${id}`, { method: "DELETE" });
    setDiseases(diseases.filter(d => d.id !== id));
  };

  return (
    <div>
      <h2>Disease Management</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Disease name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Disease</button>
      </form>

      <ul>
        {diseases.map(d => (
          <li key={d.id}>
            {d.name}
            <button onClick={() => handleDelete(d.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
