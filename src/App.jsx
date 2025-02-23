import { Route, Routes } from "react-router";
import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";
import ResourcePacks from "./pages/ResourcePacks";
import Portfolio from "./layout/Portfolio";
import './styles/app.css'

const routes = [
  { path: "resourcepacks/java", element: <ResourcePacks /> },
  { path: "resourcepacks/bedrock", element: <ResourcePacks /> },
  { path: "resourcepacks/faq", element: <ResourcePacks /> },
  { path: "resourcepacks/terms-of-use", element: <ResourcePacks /> },
  { path: "portfolio/2d", element: <Portfolio /> },
  { path: "portfolio/3d", element: <Portfolio /> },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
