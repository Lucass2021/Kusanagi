import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import HeroSection from "./components/HeroSection/HeroSection.js";
import About from "./components/AboutSection/About";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
    </>
  );
}

export default App;
