import React, { useState } from "react";
import { Modal, Form, Button, Row, FloatingLabel, Col } from "react-bootstrap";
import { stateOptions } from "../constant/constant";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";
import { updateParentProfil } from "../../api/parent";

const UpdateParent = ({ parent }) => {
  const { user } = parent;
  const id = user._id;
  // console.log("UpdateParent user =>", id);
  //the model actions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //handle changes
  let updates = { ...parent };
  const [modify, setModify] = useState({ ...updates });
  const handleChanges = (e) => {
    const { name, value } = e.target;

    if (
      name === "street" ||
      name === "state" ||
      name === "city" ||
      name === "zipCode"
    ) {
      updates = {
        ...modify,
        user: {
          ...modify.user,
          address: {
            ...modify.user.address,
            [name]: value,
          },
        },
      };
      setModify(updates);
    } else if (name === "civil" || name === "job" || name === "familyMembers") {
      updates = { ...modify, [name]: value };
      setModify(updates);
    } else {
      updates = {
        ...modify,
        user: {
          ...modify.user,
          [name]: value,
        },
      };
      setModify(updates);
    }
  };

  //handle the save button
  const handleClick = async () => {
    console.log("handle modify =>", modify);
    await updateParentProfil(id, modify);
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
                    onChange={(e) => handleChanges(e)}
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
                    onChange={(e) => handleChanges(e)}
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
                    onChange={(e) => handleChanges(e)}
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
                    onChange={(e) => handleChanges(e)}
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
                  onChange={(e) => handleChanges(e)}
                />
              </FloatingLabel>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <FloatingLabel controlId="floatingAddress" label="Address">
                  <Form.Control
                    type="text"
                    name="street"
                    defaultValue={user.address.street}
                    onChange={(e) => handleChanges(e)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <FloatingLabel controlId="floatingCity" label="Ville">
                    <Form.Control
                      type="text"
                      name="city"
                      defaultValue={user.address.city}
                      onChange={(e) => handleChanges(e)}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <FloatingLabel
                    as={Col}
                    controlId="floatingAddress"
                    label="Gouvernant"
                  >
                    <Form.Select
                      name="state"
                      onChange={(e) => handleChanges(e)}
                    >
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
                      defaultValue={user.address.zipCode}
                      onChange={(e) => handleChanges(e)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>
            </Row>
            <Row>
              <FormLabel>Etat Civil</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="civil"
              >
                <FormControlLabel
                  value="maried"
                  control={<Radio />}
                  label="Marier"
                  onChange={(e) => handleChanges(e)}
                />
                <FormControlLabel
                  value="divorced"
                  control={<Radio />}
                  label="Divorcer"
                  onChange={(e) => handleChanges(e)}
                />
              </RadioGroup>
            </Row>
            <Row>
              <FloatingLabel
                controlId="floatingInput"
                label="Emploi"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="job"
                  defaultValue={parent.job}
                  onChange={(e) => handleChanges(e)}
                />
              </FloatingLabel>
            </Row>
            <Row>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingZip"
                  label="Nombre de Members de la famille"
                >
                  <Form.Control
                    type="number"
                    min="1"
                    name="familyMembers"
                    defaultValue={parent.familyMembers}
                    onChange={(e) => handleChanges(e)}
                  />
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
