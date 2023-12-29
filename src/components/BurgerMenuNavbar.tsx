import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const BurgerMenuNavbar = () => {
  return (
    <Menu>
      <Link to="/">About</Link>
      <Link to="software-development">Software Development</Link>
      <Link to="music-production">Music Production</Link>
      <Link to="contact">Contact</Link>
    </Menu>
  );
};

export default BurgerMenuNavbar;
