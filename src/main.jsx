import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import AsistenciaPage from './pages/AsistenciaPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/informacion" element={<App />} />
        <Route path="/asistencia" element={<AsistenciaPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
