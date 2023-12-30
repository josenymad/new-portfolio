import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface BurgerMenuNavbarProps {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenuNavbar: React.FC<BurgerMenuNavbarProps> = ({
  sideBarOpen,
  setSideBarOpen,
}) => {
  const handleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <Menu
      className="fixed left-0 top-20"
      width={240}
      pageWrapId="page-wrap"
      outerContainerId="root"
      customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
      customCrossIcon={<FontAwesomeIcon icon={faXmark} />}
      isOpen={sideBarOpen}
      onOpen={handleSideBar}
      onClose={handleSideBar}
    >
      <Link to="/" onClick={closeSideBar}>
        About
      </Link>
      <span>⌯</span>
      <Link to="software-development" onClick={closeSideBar}>
        Software Development
      </Link>
      <span>⌯</span>
      <Link to="music-production" onClick={closeSideBar}>
        Music Production
      </Link>
      <span>⌯</span>
      <Link to="contact" onClick={closeSideBar}>
        Contact
      </Link>
    </Menu>
  );
};

export default BurgerMenuNavbar;
