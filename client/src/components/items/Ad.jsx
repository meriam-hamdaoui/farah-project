import React from "react";
import { Col, Card, Nav, NavItem } from "react-bootstrap";

const Ad = ({ ad }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{ad.title}</Card.Title>
        <Card.Text>{ad.description}</Card.Text>
        <a href={ad.link} target="_blank" rel="noopener noreferrer">
          visitez le lien
        </a>
      </Card.Body>
    </Card>
  );
};

export default Ad;
