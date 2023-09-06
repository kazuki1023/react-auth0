import React from "react";
import "./Navbar.css";

const Navbar = ({pockemonCount}) => {
  return (
    <nav>
      <h1>ポケモン図鑑</h1>
      <p>表示されてるポケモン:{pockemonCount}</p>
    </nav>
  );
};

export default Navbar;
