import React, { useState } from "react";
import { Modal, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";
import { childValues } from "../constant/constant";

const Child = ({ label }) => {
  let fields = { ...childValues };
  const [show, setShow] = useState(false);
  const [child, setChild] = useState({ ...fields });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "disorder" || name === "establishment" || name === "date") {
      fields = {
        ...child,
        diagnosis: {
          ...child.diagnosis,
          [name]: value,
        },
      };
      setChild(fields);
    } else if (name === "integrated" || name === "school") {
      fields = {
        ...child,
        integration: {
          ...child.integration,
          [name]: value,
        },
      };
      setChild(fields);
    } else {
      fields = {
        ...child,
        [name]: value,
      };
      setChild(fields);
    }
  };

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
                  value="garçon"
                  control={<Radio />}
                  label="Garçon"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="fille"
                  control={<Radio />}
                  label="Fille"
                  onChange={(e) => handleChange(e)}
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
                  <Form.Control
                    required
                    type="text"
                    name="firstName"
                    onChange={(e) => handleChange(e)}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nom"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    name="firstName"
                    onChange={(e) => handleChange(e)}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <FloatingLabel
                controlId="floatingInput"
                label="date de naissance"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  name="birthDate"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Type disorder"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    name="disorder"
                    onChange={(e) => handleChange(e)}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Etablisement"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    name="establishment"
                    onChange={(e) => handleChange(e)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <FloatingLabel
                controlId="floatingInput"
                label="Date de diagnostique"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  name="date"
                  onChange={(e) => handleChange(e)}
                />
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
                    onChange={(e) => handleChange(e)}
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Non"
                    onChange={(e) => handleChange(e)}
                  />
                </RadioGroup>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Ecole"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    name="school"
                    onChange={(e) => handleChange(e)}
                  />
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
