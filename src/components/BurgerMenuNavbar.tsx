import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const BurgerMenuNavbar = () => {
  return (
    <Menu
      className="fixed left-0 top-20"
      width={240}
      pageWrapId="page-wrap"
      outerContainerId="root"
    >
      <Link to="/">About</Link>
      <span>⌯</span>
      <Link to="software-development">Software Development</Link>
      <span>⌯</span>
      <Link to="music-production">Music Production</Link>
      <span>⌯</span>
      <Link to="contact">Contact</Link>
    </Menu>
  );
};

export default BurgerMenuNavbar;
