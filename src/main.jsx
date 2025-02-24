import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ScrollProvider } from "./ScrollProvider";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </BrowserRouter>
);
