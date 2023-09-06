import React from "react";
import "./Navbar.css";

const Navbar = ({pokemonCount}) => {
  return (
    <nav>
      <h1>ポケモン図鑑</h1>
      <p>ポケモンの数: {pokemonCount}</p>
    </nav>
  );
};

export default Navbar;
