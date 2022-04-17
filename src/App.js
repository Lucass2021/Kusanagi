import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import HeroSection from "./components/HeroSection/HeroSection.js";
import About from "./components/AboutSection/About";
import WeAreSection from "./components/WeAreSection/WeAreSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import PlaySection from "./components/PlaySection/PlaySection";
import ClanSection from "./components/ClanSection/ClanSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <WeAreSection />
      <ServiceSection />
      <PlaySection />
      <ClanSection />
    </>
  );
}

export default App;
