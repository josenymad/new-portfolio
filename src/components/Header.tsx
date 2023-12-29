import React from "react";
import Navbar from "./Navbar.tsx";
import BurgerMenuNavbar from "./BurgerMenuNavbar.tsx";

const Header = () => {
  return (
    <header className="text-center mb-4">
      <h1 className="text-5xl md:mb-4">Jose Wills</h1>
      {window.innerWidth > 750 ? <Navbar /> : <BurgerMenuNavbar />}
    </header>
  );
};

export default Header;
