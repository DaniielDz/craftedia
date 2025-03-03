import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>; // Muestra un loader mientras se verifica la autenticación
  if (!user) return <Navigate to="/admin/login" replace />; // Redirige al login si no está autenticado

  return <Outlet />; // Renderiza los componentes hijos si está autenticado
};

export default ProtectedRoute;