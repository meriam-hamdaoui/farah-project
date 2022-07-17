import React, { useState } from "react";
import { Modal, Form, Button, Row, FloatingLabel, Col } from "react-bootstrap";
import { stateOptions } from "../constant/constant";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";

const UpdateParent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleClose();
  };

  return (
    <div>
      <Button onClick={() => handleShow()}>modifier</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier mes informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Prénom"
                  className="mb-3"
                >
                  <Form.Control type="text" name="firstName" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nom "
                  className="mb-3"
                >
                  <Form.Control type="text" name="lastName" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" name="password" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Confirmation"
                >
                  <Form.Control type="password" name="confirmPassword" />
                </FloatingLabel>
              </Col>
            </Row>
            <br />
            <Row>
              <FloatingLabel
                controlId="floatingInput"
                label="Tel Mobile"
                className="mb-3"
              >
                <Form.Control type="phone" name="phone" />
              </FloatingLabel>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <FloatingLabel controlId="floatingAddress" label="Address">
                  <Form.Control type="text" name="street" />
                </FloatingLabel>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <FloatingLabel controlId="floatingCity" label="Ville">
                    <Form.Control type="text" name="city" />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <FloatingLabel
                    as={Col}
                    controlId="floatingAddress"
                    label="Gouvernant"
                  >
                    <Form.Select name="state">
                      <option></option>
                      {stateOptions.map((state) => (
                        <option key={state.id}>{state.value}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <FloatingLabel controlId="floatingZip" label="Postal">
                    <Form.Control type="number" min="1" name="zipCode" />
                  </FloatingLabel>
                </Form.Group>
              </Row>
            </Row>
            <Row>
              <FormLabel>Etat Civil</FormLabel>
              <RadioGroup
                required
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="civil"
              >
                <FormControlLabel
                  value="maried"
                  control={<Radio />}
                  label="Marier"
                />
                <FormControlLabel
                  value="divorced"
                  control={<Radio />}
                  label="Divorcer"
                />
              </RadioGroup>
            </Row>
            <Row>
              <FloatingLabel
                controlId="floatingInput"
                label="Emploi"
                className="mb-3"
              >
                <Form.Control type="text" name="job" />
              </FloatingLabel>
            </Row>
            <Row>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingZip"
                  label="Nombre de Members de la famille"
                >
                  <Form.Control type="number" min="1" name="familyMembers" />
                </FloatingLabel>
              </Form.Group>
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
    </div>
  );
};

export default UpdateParent;
