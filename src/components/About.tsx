import React from "react";
import portrait from "../assets/Portfolio portrait-PhotoRoom.jpg";

const About = () => {
  return (
    <section className="flex justify-evenly">
      <img
        src={portrait}
        alt="Portfolio Portrait"
        className="w-1/6 border-solid border-2 border-stone-200 rounded-full shadow-2xl"
      />
      <article className="self-center text-xl">
        <p>
          Hi! Welcome to my portfolio, and thanks for taking the time to have a
          look around.
        </p>
        <p>
          Driven by a passion for both technology and creativity, I write code
          and make music.
        </p>
      </article>
    </section>
  );
};

export default About;
