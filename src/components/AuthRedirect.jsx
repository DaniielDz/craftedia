import { useEffect } from "react";
import  useAuth  from "../hooks/useAuth";
import { Navigate } from "react-router";

const AuthRedirect = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
  }, [user, loading]);

  if (loading) return <p>Cargando...</p>;

  // Redirige a /admin/login si no está autenticado, o a /admin/panel si está autenticado
  return user ? <Navigate to="/admin/panel" replace /> : <Navigate to="/admin/login" replace />;
};

export default AuthRedirect;