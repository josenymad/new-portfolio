import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <article>
      <div>
        <motion.p className="text-9xl text-center">This website!</motion.p>
        <motion.p
          className="text-8xl text-center"
          animate={{ x: [null, 5, 0, -5, 0], y: [null, 5, 0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-7xl text-center"
          animate={{ x: [null, 10, 0, -10, 0], y: [null, 10, 0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-6xl text-center"
          animate={{ x: [null, 15, 0, -15, 0], y: [null, 15, 0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-5xl text-center"
          animate={{ x: [null, 20, 0, -20, 0], y: [null, 20, 0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-4xl text-center"
          animate={{ x: [null, 25, 0, -25, 0], y: [null, 25, 0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-3xl text-center"
          animate={{ x: [null, 30, 0, -30, 0], y: [null, 30, 0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-2xl text-center"
          animate={{ x: [null, 35, 0, -35, 0], y: [null, 35, 0, 35, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-xl text-center"
          animate={{ x: [null, 40, 0, -40, 0], y: [null, 40, 0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-lg text-center"
          animate={{ x: [null, 45, 0, -45, 0], y: [null, 45, 0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-base text-center"
          animate={{ x: [null, 50, 0, -50, 0], y: [null, 50, 0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-sm text-center"
          animate={{ x: [null, 55, 0, -55, 0], y: [null, 55, 0, 55, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
        <motion.p
          className="text-xs text-center"
          animate={{ x: [null, 60, 0, -60, 0], y: [null, 60, 0, 60, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          This website!
        </motion.p>
      </div>
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
