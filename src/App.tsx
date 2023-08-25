import React from "react";
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage/aboutPage";
import HomePage from "./pages/homePage/homePage";
import ServicesPage from "./pages/servicePage/servicesPage";
import SolutionsPage from "./pages/solutionsPage/solutionsPage";

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
