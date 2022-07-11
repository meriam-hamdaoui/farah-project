import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const ParentProfil = () => {
  const parents = useSelector((state) => state.parent);
  //   console.log("parent profil =>", parent);
  return (
    <div className="main-container">
      {parents.map((el) => {
        return (
          <Container key={uuidv4()}>
            <Container className="container-drt">
              <Row>
                <Card.Img variant="top" src="holder.js/100px180" />
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    disabled
                    value={el.user.firstName}
                  />
                  <Form.Control type="text" disabled value={el.user.lastName} />
                </Col>
                <Col>
                  <Form.Control type="text" disabled value={el.user.email} />
                  <Form.Control type="text" disabled value={el.user.password} />
                </Col>
              </Row>
            </Container>
            <Container className="container-gch"></Container>
          </Container>
        );
      })}
    </div>
  );
};

export default ParentProfil;
