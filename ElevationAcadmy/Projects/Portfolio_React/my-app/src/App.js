import { ThemeProvider } from "@mui/material";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./Components/NavbarComponent/Navbar";
import AboutPage from "./Pages/About/AboutPage";
import HomePage from "./Pages/Home/HomePage";
import Theme from "./ThemeCom/Theme";
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        </BrowserRouter>
        
      </ThemeProvider>
    </>
  );
}

export default App;
