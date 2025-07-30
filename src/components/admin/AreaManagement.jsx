import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";

export default function AreaManagement() {
  const [areas, setAreas] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/areas`)
      .then((res) => res.json())
      .then((data) => setAreas(data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/api/areas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      const newArea = await res.json();
      setAreas([...areas, newArea]);
      setName("");
    }
  };

  const handleDelete = async (id) => {
    await fetch(`${API_BASE_URL}/api/areas/${id}`, { method: "DELETE" });
    setAreas(areas.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h2>Area Management</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Area name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Area</button>
      </form>

      <ul>
        {areas.map((a) => (
          <li key={a.id}>
            {a.name}
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
