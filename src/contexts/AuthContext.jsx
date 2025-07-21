import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  // add the render links to the fetch functions for both register and login
  const register = async (email, password) => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Registration Failed");
    }
    const data = await response.json();
    const token = data.token;
    setToken(token);
    localStorage.setItem("token", token);
    return token;
  };

  const login = async (email, password) => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Login Failed");
    }
    const data = await response.json();
    const token = data.token;
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    setToken = null;
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
