import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { GlobalContext } from "./context";
const Sidebar = () => {
  const { closeBar, IscloseBar } = GlobalContext();
  return (
    <aside className={closeBar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={IscloseBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            return (
              <article key={link.page}>
                <h4>{link.page}</h4>
                <div className="sidebar-sublinks">
                  {link.links.map((item) => {
                    return (
                      <a href={item.url} key={item.label}>
                        {item.icon}
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
