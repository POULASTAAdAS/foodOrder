import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWIthNavigate from "./auth/Auth0ProviderWIthNavigate";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWIthNavigate>
        <AppRoutes />
      </Auth0ProviderWIthNavigate>
    </Router>
  </StrictMode>
);
