import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <article>
      <h2 className="text-9xl text-center mb-4">This website!</h2>
      <Link
        to="https://github.com/josenymad/new-portfolio"
        className="block text-center underline"
        target="_blank"
      >
        Check it out on GitHub
      </Link>
    </article>
  );
};

export default Portfolio;
