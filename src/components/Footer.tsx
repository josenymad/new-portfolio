import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center mt-auto">
      <Link to="https://www.linkedin.com/in/jose-wills" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" className="mx-4" />
      </Link>
      <Link to="https://github.com/josenymad" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2xl" className="mx-4" />
      </Link>
      <Link to="https://www.instagram.com/jose.nymad/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2xl" className="mx-4" />
      </Link>
    </footer>
  );
};

export default Footer;
