import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage.jsx";
import Education from "./pages/education/Education.jsx";
import Projects from "./pages/projects/Projects.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
