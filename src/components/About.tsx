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
          for a living and make music in my spare time.
        </p>
        <p>
          I built this site to showcase my work, so feel free to browse through
          my projects and listen to some tunes.
        </p>
        <p>
          If you&apos;d like to get in touch, head over to the contact section.
        </p>
      </article>
    </section>
  );
};

export default About;
