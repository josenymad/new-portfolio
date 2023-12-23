import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header.tsx";
import About from "./About.tsx";
import SoftwareDevelopment from "./SoftwareDevelopment.tsx";
import MusicProduction from "./MusicProduction.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import Skills from "./Skills.tsx";

const App = () => {
  const [slides, setSlides] = useState({
    previousSlide: 0,
    activeSlide: 0,
    nextActiveSlide: 0,
  });
  const { activeSlide } = slides;
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="software-development"
            element={
              <SoftwareDevelopment slides={slides} setSlides={setSlides} />
            }
          />
          <Route path="music-production" element={<MusicProduction />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {pathname !== "/music-production" ? (
          <Skills activeSlide={activeSlide} />
        ) : null}
      </main>
      <Footer />
    </>
  );
};

export default App;
