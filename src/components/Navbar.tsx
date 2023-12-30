import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="text-2xl 2xl:text-3xl 3xl:text-4xl flex justify-center">
        <li>
          <Link to="/">About</Link>
        </li>
        <li className="mx-4">⌯</li>
        <li>
          <Link to="software-development">Software Development</Link>
        </li>
        <li className="mx-4">⌯</li>
        <li>
          <Link to="music-production">Music Production</Link>
        </li>
        <li className="mx-4">⌯</li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
