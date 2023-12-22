import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.tsx";
import About from "./About.tsx";
import SoftwareDevelopment from "./SoftwareDevelopment.tsx";
import MusicProduction from "./MusicProduction.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import Skills from "./Skills.tsx";

const App = () => {
  const [previousSlide, setPreviousSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [nextActiveSlide, setNextActiveSlide] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="software-development"
            element={
              <SoftwareDevelopment
                setPreviousSlide={setPreviousSlide}
                setActiveSlide={setActiveSlide}
                setNextActiveSlide={setNextActiveSlide}
              />
            }
          />
          <Route path="music-production" element={<MusicProduction />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Skills activeSlide={activeSlide} />
      </main>
      <Footer />
    </>
  );
};

export default App;
