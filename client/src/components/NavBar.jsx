import React from "react";
import Wrapper from "../assets/wrappers/Navbar.js";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo.jsx";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";
import LogoutContainer from "./LogoutContainer.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const NavBar = () => {
  const { toggleSideBar, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
