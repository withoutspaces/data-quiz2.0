import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./index.css";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
    <Toaster richColors position="top-right" />
  </React.StrictMode>
);
