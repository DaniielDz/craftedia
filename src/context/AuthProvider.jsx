import { useState, useEffect } from "react";
import { loginRequest, logoutRequest, checkAuthStatus } from "../api/authApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await checkAuthStatus();
        setUser(response.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
  
    verifyAuth();
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      const response = await loginRequest(email, password);
      setUser(response.user); // Asume que el backend devuelve el usuario en `response.user`
    } catch (error) {
      throw new Error("Error en el login");
    }
  };

  // Logout
  const logout = async () => {
    try {
      await logoutRequest();
      setUser(null);
    } catch (error) {
      throw new Error("Error en el logout");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
