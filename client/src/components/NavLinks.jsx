import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggle = true }) => {
  const { toggleSideBar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;

        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={toggle ? toggleSideBar : null}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
