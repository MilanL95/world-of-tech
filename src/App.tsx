import React from "react";
import LoginPage from "./features/pages/loginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./features/pages/aboutPage";
import HomePage from "./features/pages/homePage";
import ServicesPage from "./features/pages/servicesPage";
import SolutionsPage from "./features/pages/solutionsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
