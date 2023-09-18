import React from "react";
import LoginPage from "./pages/loginPage/loginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
