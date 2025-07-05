import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar.js";
import Logo from "./Logo.jsx";
import { FaTimes } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";
import NavLinks from "./NavLinks.jsx";

const SmallSideBar = () => {
  const { toggleSideBar, showSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
