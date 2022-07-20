import React from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Profil.css";
import {
  removeUserDB,
  removeParentDB,
  removeConsultantDB,
} from "../../api/admin";

const UserCard = ({ user, children }) => {
  // console.log("user_card user =>", user.category);
  const currentLocation = useLocation().pathname;
  // console.log("currentLocation =>", currentLocation);

  const removeUser = async (id) => {
    await removeUserDB(id);
  };

  return (
    <Card className="user_card">
      <div>
        {(currentLocation === "/dashboard/parents" ||
          currentLocation === "/dashboard/consultants") && (
          <button onClick={() => removeUser(user._id)}>delete</button>
        )}
      </div>

      <div>
        <Card.Img variant="top" src="/avatar.png" className="circle-img" />
        <Card.Title>
          {user.category} :{user.firstName}&nbsp;{user.lastName}
        </Card.Title>
        <Card.Title>Email : {user.email}</Card.Title>
      </div>
      <div>
        <Card.Body>
          <Card.Text>Mobile : {user.phone}</Card.Text>
          <Card.Text>
            Address : {user.address.street}&nbsp; {user.address.city} <br />
            {user.address.state}&nbsp; {user.address.zipCode}{" "}
          </Card.Text>
          {children}
        </Card.Body>
      </div>
    </Card>
  );
};

export default UserCard;
