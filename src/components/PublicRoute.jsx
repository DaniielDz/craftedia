import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>; // Muestra un loader mientras se verifica la autenticación
  if (user) return <Navigate to="/admin/panel" replace />; // Redirige si está autenticado

  return <Outlet />; // Renderiza los componentes hijos si no está autenticado
};

export default PublicRoute;