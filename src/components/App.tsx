import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.tsx";
import About from "./About.tsx";
import SoftwareDevelopment from "./SoftwareDevelopment.tsx";
import MusicProduction from "./MusicProduction.tsx";
import Contact from "./Contact.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="music-production" element={<MusicProduction />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
