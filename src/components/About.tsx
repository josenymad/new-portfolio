import React from "react";
import portrait from "../assets/Portfolio portrait-PhotoRoom.jpg";

const About = () => {
  return (
    <section>
      <img
        src={portrait}
        alt="Portfolio Portrait"
        className="w-1/5 rounded-full shadow-2xl"
      />
    </section>
  );
};

export default About;
