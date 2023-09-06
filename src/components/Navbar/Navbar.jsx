import React from "react";
import "./Navbar.css";
import LoginButton from "./login";

const Navbar = ({pockemonCount}) => {
  return (
    <nav>
      <h1>ポケモン図鑑</h1>
      <p>表示されてるポケモン:{pockemonCount}</p>
      <LoginButton />
    </nav>
  );
};

export default Navbar;
