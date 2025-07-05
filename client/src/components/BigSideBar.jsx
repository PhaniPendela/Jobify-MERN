import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar.js";
import { Logo } from "./index.js";
import NavLinks from "./NavLinks.jsx";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";

const BigSideBar = () => {
  const { showSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks toggle={false} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
