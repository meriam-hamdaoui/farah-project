import React from "react";
import { Card } from "react-bootstrap";
import Child from "../forms/Child";

const ChildCard = ({ child }) => {
  return (
    <Card>
      <div>
        <Card.Img variant="top" src="/avatar.png" className="circle-img" />
        <Card.Title>
          {child.gender} : {child.childFName}&nbsp;{child.ChildLName}
        </Card.Title>
      </div>
      <div>
        <Card.Body>
          <Card.Text>date de naissance : {child.birthDate}</Card.Text>
          <Card.Text>
            type de disorder : {child.diagnosis.disorder} <br />
            etablisement : {child.diagnosis.establishment}
            <br />
            date de diagnostic : {child.diagnosis.date}
          </Card.Text>
          {child.integration.integrated && (
            <Card.Text>integrer à : {child.integration.school}</Card.Text>
          )}
        </Card.Body>
      </div>
      <Child label={"modifier"} />
    </Card>
  );
};

export default ChildCard;
