import React from "react";
import { GlobalContext } from "./context";
const Submenu = () => {
  const { sublinks, Number, hover } = GlobalContext();

  return (
    <>
      <div
        className={hover ? "submenu show-submenu" : "submenu"}
        key={sublinks[Number].page}
      >
        <h5>{sublinks[Number].page}</h5>
        <div
          className="submenu-links"
          style={{ gridTemplateColumns: Number === 1 ? "1fr 1fr" : "1fr " }}
        >
          {sublinks[Number].links.map((link) => {
            return (
              <a href={link.url} key={link.label}>
                {link.icon}
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
      );
    </>
  );
};

export default Submenu;
