import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>Home Layout</nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
