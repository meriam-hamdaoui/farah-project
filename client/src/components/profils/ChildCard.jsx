import React from "react";
import { Card } from "react-bootstrap";
import Child from "../forms/Child";

const ChildCard = ({ child }) => {
  let index1 = child.birthDate.indexOf("T");
  let index2 = child.diagnosis.date.indexOf("T");
  return (
    <Card>
      <div>
        <Card.Img variant="top" src="/avatar.png" className="circle-img" />
        <Card.Title>
          {child.gender} : {child.childFName}&nbsp;{child.childLName}
        </Card.Title>
      </div>
      <div>
        <Card.Body>
          <Card.Text>
            date de naissance : {child.birthDate.slice(0, index1)}
          </Card.Text>
          <Card.Text>
            type de disorder : {child.diagnosis.disorder} <br />
            etablisement : {child.diagnosis.establishment}
            <br />
            date de diagnostic : {child.diagnosis.date.slice(0, index2)}
          </Card.Text>
          {child.integration.integrated && (
            <Card.Text>integrer à : {child.integration.school}</Card.Text>
          )}
        </Card.Body>
      </div>
      <Child label={"modifier"} theChild={child} />
    </Card>
  );
};

export default ChildCard;
