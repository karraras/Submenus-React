import React from "react";
import { FaBars } from "react-icons/fa";
import { GlobalContext } from "./context";
const Navbar = () => {
  const { IsOpenBar, NumberZero, NumberOne, NumberTwo, HoverOut } =
    GlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={IsOpenBar}>
          <FaBars />
        </button>
        <div className="nav-links">
          <button
            className="nav-link"
            onMouseEnter={NumberZero}
            onMouseOut={HoverOut}
          >
            product
          </button>
          <button
            className="nav-link"
            onMouseEnter={NumberOne}
            onMouseOut={HoverOut}
          >
            solutions
          </button>
          <button
            className="nav-link"
            onMouseEnter={NumberTwo}
            onMouseOut={HoverOut}
          >
            resources
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
