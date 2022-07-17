import React, { useState } from "react";
import { Modal, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";

// birthDate: { type: Date },
// diagnosis: {
//   disorder: { type: String },
//   establishment: { type: String },
//   date: { type: Date },
// },
// integration: {
//   integrated: { type: Boolean },
//   school: {
//     type: String,
//     required: () => {
//       return this.integrated === true;
//     },
//   },
// },
// inscritDate: {
//   type: Date,
//   default: Date.now(),
// },

const Child = ({ label }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleClose();
  };

  return (
    <>
      <Button onClick={() => handleShow()}>{label}</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <FormLabel>Sex</FormLabel>
              <RadioGroup row name="gender">
                <FormControlLabel
                  value="boy"
                  control={<Radio />}
                  label="Garçon"
                />
                <FormControlLabel
                  value="girl"
                  control={<Radio />}
                  label="Fille"
                />
              </RadioGroup>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Prénom"
                  className="mb-3"
                >
                  <Form.Control required type="text" name="firstName" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nom"
                  className="mb-3"
                >
                  <Form.Control required type="text" name="firstName" />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <FloatingLabel
                controlId="floatingInput"
                label="date de naissance"
                className="mb-3"
              >
                <Form.Control type="date" name="birthDate" />
              </FloatingLabel>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Type disorder"
                  className="mb-3"
                >
                  <Form.Control required type="text" name="disorder" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Etablisement"
                  className="mb-3"
                >
                  <Form.Control required type="text" name="establishment" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <FloatingLabel
                controlId="floatingInput"
                label="Date de diagnostique"
                className="mb-3"
              >
                <Form.Control type="date" name="date" />
              </FloatingLabel>
            </Row>
            <Row>
              <Col>
                <FormLabel>Integration</FormLabel>
                <RadioGroup row name="integrated">
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Oui"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Non"
                  />
                </RadioGroup>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Ecole"
                  className="mb-3"
                >
                  <Form.Control required type="text" name="school" />
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            fermer
          </Button>
          <Button onClick={handleClick} variant="primary">
            enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Child;
