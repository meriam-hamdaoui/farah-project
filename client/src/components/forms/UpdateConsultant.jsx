import React, { useState } from "react";
import { Modal, Form, Button, Row, FloatingLabel, Col } from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";
import { stateOptions } from "../constant/constant";
import { updateConsultantProfil } from "../../api/consultant.js";

const UpdateConsultant = ({ consultant }) => {
  console.log("consultant =>", consultant);
  const { user } = consultant;
  const id = user._id;
  console.log("consultant id =>", id);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //handle changes
  let updates = { ...consultant };
  const [modify, setModify] = useState({ ...updates });
  // console.log("consultant modify =>", modify);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "degree" || name === "graduation" || name === "university") {
      updates = {
        ...modify,
        educations: {
          ...modify.educations,
          [name]: value,
        },
      };
      setModify((defaultValue) => {
        return {
          ...defaultValue,
          ...updates,
        };
      });
    } else if (name === "gender" || name === "domain" || name === "offers") {
      updates = {
        ...modify,
        [name]: value,
      };
      setModify((defaultValue) => {
        return {
          ...defaultValue,
          ...updates,
        };
      });
    } else {
      updates = {
        ...modify,
        user: {
          ...modify.user,
          [name]: value,
        },
      };
      setModify((defaultValue) => {
        return {
          ...defaultValue,
          ...updates,
        };
      });
    }
    // console.log("consultant onChange =>", modify);
  };

  const handleClick = async () => {
    await updateConsultantProfil(id, modify);
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
                  <Form.Control
                    type="text"
                    name="firstName"
                    defaultValue={user.firstName}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nom "
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="lastName"
                    defaultValue={user.lastName}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Confirmation"
                >
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
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
                <Form.Control
                  type="phone"
                  name="phone"
                  defaultValue={user.phone}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <FloatingLabel controlId="floatingAddress" label="Address">
                  <Form.Control
                    type="text"
                    name="street"
                    defaultValue={user.street}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <FloatingLabel controlId="floatingCity" label="Ville">
                    <Form.Control
                      type="text"
                      name="city"
                      defaultValue={user.city}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <FloatingLabel
                    as={Col}
                    controlId="floatingAddress"
                    label="Gouvernant"
                  >
                    <Form.Select name="state" onChange={handleChange}>
                      <option>{user.address.state}</option>
                      {stateOptions.map((state) => (
                        <option key={state.id}>{state.value}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <FloatingLabel controlId="floatingZip" label="Postal">
                    <Form.Control
                      type="number"
                      min="1"
                      name="zipCode"
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>
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

export default UpdateConsultant;
