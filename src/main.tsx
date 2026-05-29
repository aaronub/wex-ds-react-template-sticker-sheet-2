import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * WEX Design System Template
 *
 * Theme switching:
 * - Light mode (default): no class needed on <html>
 * - Dark mode: add class="dark" to <html> element
 *   document.documentElement.classList.add("dark");
 *
 * Color customization:
 * - Override CSS custom properties in src/index.css under @layer base
 * - Example: --primary: 210 100% 50%;
 * - See @wex/design-tokens/css/design-tokens.css for all available tokens
 */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
