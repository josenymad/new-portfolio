import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="text-2xl 2xl:text-3xl 3xl:text-4xl flex justify-center">
        <li>
          <Link
            to="/"
            className={`hover-underline ${
              pathname === "/" ? "custom-underline" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className="mx-4">⌯</li>
        <li>
          <Link
            to="software-development"
            className={`hover-underline ${
              pathname === "/software-development" ? "custom-underline" : ""
            }`}
          >
            Software Development
          </Link>
        </li>
        <li className="mx-4">⌯</li>
        <li>
          <Link
            to="music-production"
            className={`hover-underline ${
              pathname === "/music-production" ? "custom-underline" : ""
            }`}
          >
            Music Production
          </Link>
        </li>
        <li className="mx-4">⌯</li>
        <li>
          <Link
            to="contact"
            className={`hover-underline ${
              pathname === "/contact" ? "custom-underline" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
