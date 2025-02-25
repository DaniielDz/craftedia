import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ScrollProvider } from "./context/ScrollProvider.jsx";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ScrollProvider>
  </BrowserRouter>
);
