import { Route, Routes } from "react-router";
import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";
import ResourcePacks from "./pages/ResourcePacks";
import Portfolio from "./layout/Portfolio";
import "./styles/app.css";
import InnerPage from "./pages/InnerPage";

const routesRP = [
  { path: "java", element: <ResourcePacks /> },
  { path: "bedrock", element: <ResourcePacks /> },
  { path: "faq", element: <ResourcePacks /> },
  { path: "terms-of-use", element: <ResourcePacks /> }
];

const routesPf = [
  { path: "2d", element: <Portfolio /> },
  { path: "3d", element: <Portfolio /> },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="resourcepacks" element={<InnerPage />}>
            {routesRP.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
          <Route path="portfolio" element={<InnerPage />}>
            {routesPf.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
