import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setParent } from "../../JS/parentReducer";

const ParentProfil = () => {
  const parent = useSelector((state) => state.parent);
  console.log("parent profile", parent);
  return <div>Parent Profile</div>;
};

export default ParentProfil;
