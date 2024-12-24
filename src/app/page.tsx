
"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Head from "next/head";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <AboutSection darkMode={darkMode} /> 
        <ProjectsSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>
      <Footer />

     
    </div>
  );
};

export default Home;
