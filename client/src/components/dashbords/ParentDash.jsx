import React from "react";
import { useSelector } from "react-redux";
import Dashborad from "../templates/Dashborad";
// import Child from "../forms/Child";
// import { setProfile } from "../../JS/parentReducer";
import { v4 as uuidv4 } from "uuid";

const ParentDash = () => {
  const parent = useSelector((state) => state.parent);
  console.log("parent Parent component=> ", parent);
  return (
    <div>
      {parent.map((el) => (
        <Dashborad key={uuidv4()} details={el}>
          {" "}
        </Dashborad>
      ))}
    </div>
  );
};

export default ParentDash;
