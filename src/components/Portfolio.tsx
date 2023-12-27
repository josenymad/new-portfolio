import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

interface PortfolioProps {
  scrollY: number;
  setScrollY: React.Dispatch<React.SetStateAction<number>>;
}

const Portfolio: React.FC<PortfolioProps> = ({ scrollY, setScrollY }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    controls.start({ y: scrollY * 0.75 });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY, controls]);

  return (
    <article>
      <motion.p className="text-[9vw] text-center" animate={controls}>
        This website!
      </motion.p>
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
