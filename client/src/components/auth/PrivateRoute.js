import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  // {component,rest} are props rest: spread the rest of the props
  const token = localStorage.getItem("token");
  console.log("token =>", token);
  return <>{token ? <>{children}</> : <div> OUPS!!! access denied</div>}</>;
};

export default PrivateRoute;
