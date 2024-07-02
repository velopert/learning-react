import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/red">Red</Link>
      </li>
      <li>
        <Link to="/blue">Blue</Link>
      </li>
    </ul>
  );
};

export default Menu;