import { Route, Routes } from "react-router";
import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";
import ResourcePacks from "./pages/ResourcePacks";
import Portfolio from "./layout/Portfolio";
import "./styles/app.css";
import InnerPage from "./pages/InnerPage";
import RPPostDetail from "./pages/RPPostDetail";
import PFPostDetail from "./pages/PFPostDetail";
import FaqPage from "./pages/FaqPage";
import TermsPage from "./pages/TermsPage";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminPanel from "./pages/Admin/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import AuthRedirect from "./components/AuthRedirect";
import AdminSingUp from "./pages/Admin/AdminSingUp";

const routesRP = [
  { path: "java", title: "Java Resource Packs", element: <ResourcePacks /> },
  {
    path: "bedrock",
    title: "Bedrock Resource Packs",
    element: <ResourcePacks />,
  },
];

const routesPf = [
  { path: "2d", title: "2D Portfolio", element: <Portfolio /> },
  { path: "3d", title: "3D Portfolio", element: <Portfolio /> },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />

        <Route path="resourcepacks" element={<InnerPage />}>
          {routesRP.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        {routesRP.map((route, index) => (
          <Route
            key={`rp-dynamic-${index}`}
            path={`resourcepacks/${route.path}/:id`}
            element={<RPPostDetail />}
          />
        ))}

        <Route path="portfolio" element={<InnerPage />}>
          {routesPf.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        {routesPf.map((route, index) => (
          <Route
            key={`pf-dynamic-${index}`}
            path={`portfolio/${route.path}/:id`}
            element={<PFPostDetail />}
          />
        ))}

        <Route path="faq" element={<FaqPage />} />
        <Route path="terms-of-use" element={<TermsPage />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AuthRedirect />} /> {/* Redirige dinámicamente */}
          <Route element={<PublicRoute />}>
            <Route path="login" element={<AdminLogin />} /> {/* Ruta pública */}
            <Route path="singUp" element={<AdminSingUp />} /> {/* Ruta pública */}
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="panel" element={<AdminPanel />} /> {/* Ruta privada */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App; 