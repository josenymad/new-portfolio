import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface PortfolioProps {
  scrollY: number;
  setScrollY: React.Dispatch<React.SetStateAction<number>>;
}

const Portfolio: React.FC<PortfolioProps> = ({ scrollY, setScrollY }) => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const { innerHeight } = window;
  let pagePortion = 0.75;
  let scrollSpeed = 0.55;

  if (innerHeight > 900) {
    pagePortion = 0.5;
    scrollSpeed = 0.75;
  }

  if (innerHeight < 700) {
    pagePortion = 0.35;
    scrollSpeed = 0.775;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    controls.start({ y: scrollY * scrollSpeed });
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
      <motion.p className="text-[9vw] text-center" animate={controls}>
        <FontAwesomeIcon
          icon={scrollYProgress.get() >= pagePortion ? faArrowUp : faArrowDown}
        />
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
