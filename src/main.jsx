import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ScrollProvider } from "./context/ScrollProvider.jsx";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import {AuthProvider} from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollProvider>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </ScrollProvider>
  </BrowserRouter>
);
