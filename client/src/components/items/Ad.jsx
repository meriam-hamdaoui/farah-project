import React from "react";
import { Col, Card, Nav, NavItem } from "react-bootstrap";

const Ad = ({ ad }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{ad.title}</Card.Title>
        <Card.Text>{ad.description}</Card.Text>
        <Nav>
          <NavItem href={ad.link}>visitez le lien </NavItem>
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default Ad;
