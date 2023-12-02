import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="text-stone-200 font-jost text-2xl">
        <li className="inline-block">
          <Link to="/">About</Link>
        </li>
        <li className="inline-block mx-4">⌯</li>
        <li className="inline-block">
          <Link to="software-development">Software Development</Link>
        </li>
        <li className="inline-block mx-4">⌯</li>
        <li className="inline-block">
          <Link to="music-production">Music Production</Link>
        </li>
        <li className="inline-block mx-4">⌯</li>
        <li className="inline-block">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
