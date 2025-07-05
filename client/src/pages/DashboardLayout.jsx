import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { BigSideBar, Navbar, SmallSideBar } from "../components/index.js";
import Wrapper from "../assets/wrappers/Dashboard.js";
import { initialIsDarkTheme } from "../App.jsx";

const DashboardContext = createContext();

const DashboardLayout = () => {
  // User Name
  const user = { name: "jonas" };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(initialIsDarkTheme());

  const toggleDarkTheme = function () {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSideBar = function () {
    setShowSideBar(!showSideBar);
  };

  const logoutUser = async function () {
    console.log("LogOut User");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSideBar,
        isDarkTheme,
        toggleSideBar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = function () {
  return useContext(DashboardContext);
};
export default DashboardLayout;
