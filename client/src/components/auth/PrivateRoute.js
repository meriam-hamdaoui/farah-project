import React from "react";

const PrivateRoute = ({ component, ...rest }) => {
  // {component,rest} are props rest: spread the rest of the props
  const token = localStorage.getItem("token");
  console.log("token =>", token);
  return (
    <>
      {token ? <div> hi there u made it</div> : <div>OUPS!! Access denied</div>}
    </>
  );
};

export default PrivateRoute;
