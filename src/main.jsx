import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App.jsx";
import AsistenciaPage from "./pages/AsistenciaPage.jsx";
import MusicaPage from "./pages/MusicaPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/informacion" element={<App />} />
        <Route path="/asistencia" element={<AsistenciaPage />} />
        <Route path="/musica" element={<MusicaPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);