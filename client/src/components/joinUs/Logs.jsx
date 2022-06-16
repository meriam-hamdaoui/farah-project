import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Logs = () => {
  return (
    //  d-flex align-items-center
    <div
      style={{ height: "100px" }}
      className="logs h-100 d-flex flex-column align-content-center justify-content-center"
    >
      <nav className="links">
        <NavLink to="/join-us/sign-in">Login </NavLink>
        <NavLink to="/join-us/sign-up">Register </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Logs;
