import React, { useState } from "react";
import UserManagement from "../components/admin/UserManagement";
import DiseaseManagement from "../components/admin/DiseaseManagement";
import AreaManagement from "../components/admin/AreaManagement";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="admin-dashboard container">
      <h1>Admin Dashboard</h1>
      <div className="admin-tabs">
        <button onClick={() => setActiveTab("users")}>Users</button>
        <button onClick={() => setActiveTab("diseases")}>Diseases</button>
        <button onClick={() => setActiveTab("areas")}>Areas</button>
      </div>

      {activeTab === "users" && <UserManagement />}
      {activeTab === "diseases" && <DiseaseManagement />}
      {activeTab === "areas" && <AreaManagement />}
    </div>
  );
}
