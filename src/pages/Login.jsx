import React from "react";
import LoginForm from "../components/LoginForm";
import "../styles/App.css";

export default function Login() {
  return (
    <div className="page-background login-page">
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
}
