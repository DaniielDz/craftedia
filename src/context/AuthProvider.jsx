import { useState, useEffect } from "react";
import {
  loginRequest,
  singUpRequest,
  logoutRequest,
  checkAuthStatus,
} from "../api/authApi";
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
    const response = await loginRequest(email, password);
    setUser(response.user);
  };

  const singUp = async (email, password) => {
    const response = await singUpRequest(email, password);
    setUser({ email: response.user });
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
    <AuthContext.Provider value={{ user, login, singUp, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
