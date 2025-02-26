import { Route, Routes } from "react-router";
import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";
import ResourcePacks from "./pages/ResourcePacks";
import Portfolio from "./layout/Portfolio";
import "./styles/app.css";
import InnerPage from "./pages/InnerPage";
import PostDetail from "./pages/PostDetail";

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
            element={<PostDetail/>} 
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
            element={<PostDetail/>} 
          />
        ))}

      </Route>
    </Routes>
  );
}

export default App;
