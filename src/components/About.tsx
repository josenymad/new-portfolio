import React from "react";
import portrait from "../assets/Portfolio portrait-PhotoRoom.jpg";

const About = () => {
  return (
    <section className="flex justify-around">
      <img
        src={portrait}
        alt="Portfolio Portrait"
        className="w-1/5 rounded-full shadow-2xl"
      />
      <article>
        <p>
          Hi! Welcome to my portfolio, and thanks for taking the time to have a
          around.
        </p>
        <p>
          I write code and make music, driven by a passion for technology and
          creativity combined.
        </p>
      </article>
    </section>
  );
};

export default About;
