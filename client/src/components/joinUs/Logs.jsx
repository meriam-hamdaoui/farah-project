import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Logs = () => {
  return (
    <div className="signIn">
      {/* <nav className="links">
        <NavLink to="signin">A Member </NavLink>
        <NavLink to="signup">Not a Member </NavLink>
      </nav>*/}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Logs;
