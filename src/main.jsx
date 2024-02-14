// Import react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import pages
import Weather from "./pages/Weather.jsx";
import Info from "./pages/Info.jsx";
import Settings from "./pages/Settings.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/info" element={<Info />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
