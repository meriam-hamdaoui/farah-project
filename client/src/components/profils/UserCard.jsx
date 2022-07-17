import React from "react";
import { Card } from "react-bootstrap";
import "./Profil.css";

const UserCard = ({ user, children }) => {
  return (
    <Card className="user_card">
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
