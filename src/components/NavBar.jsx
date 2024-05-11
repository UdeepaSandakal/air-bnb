import React from "react";
import Logo from "../assets/air_bnb_logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <img src={Logo} alt="Air_BnB_Logo" className="nav--logo" />
      </nav>
    </div>
  );
}

export default Navbar;
