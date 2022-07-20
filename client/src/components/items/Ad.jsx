import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ModalAd from "../forms/ModalAd";

const Ad = ({ ad, handleChangePub }) => {
  const currentPath = useLocation().pathname;
  // console.log("currentPath ad =>", currentPath);
  return (
    <Card style={{ width: "18rem" }}>
      {currentPath === "/dashboard/ads" && (
        <div>
          <button>delete</button>
          <ModalAd ad={ad} />
        </div>
      )}
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
