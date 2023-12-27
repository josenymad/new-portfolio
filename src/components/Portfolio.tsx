import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <article>
      <motion.p className="text-[9vw] text-center">This website!</motion.p>
      <div className="absolute bottom-0 w-full">
        <Link
          to="https://github.com/josenymad/new-portfolio"
          className="block text-center underline"
          target="_blank"
        >
          Check it out on GitHub
        </Link>
      </div>
    </article>
  );
};

export default Portfolio;
