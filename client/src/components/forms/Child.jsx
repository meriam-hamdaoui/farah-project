import React, { useState } from "react";
import { Modal, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material/";
import { childValues } from "../constant/constant";
import { ajoutEnfant, modifierEnfant } from "../../api/parent";
import { setChildReducer, addChild } from "../../JS/childReducer";
import { useDispatch } from "react-redux";

const Child = ({ label, theChild }) => {
  let fields = { ...childValues };
  // console.log("first fields =>", fields);
  const [show, setShow] = useState(false);
  const [child, setChild] = useState({ ...fields });
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (label === "modifier") {
      console.log("theChild =>", theChild._id);
    }
    setShow(true);
  };

  //changes of inputes
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
    } else if (
      name === "childFName" ||
      name === "childLName" ||
      name === "gender" ||
      name === "birthDate"
    ) {
      fields = {
        ...child,
        [name]: value,
      };
      setChild(fields);
    }

    console.log("second fields =>", fields);
  };

  const dispatch = useDispatch();

  const handleClick = async () => {
    if (label === "modifier") {
      const id = theChild._id;
      console.log("handleClick child =>", id);
      await modifierEnfant(id, child);
    } else if (label === "ajouter un enfant") {
      await ajoutEnfant({ ...child })
        .then((res) => {
          dispatch(addChild({ ...child }));
        })
        .catch((err) => {
          console.log("error ajout enfant +>", err);
        });
    }
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
              <RadioGroup
                row
                name="gender"
                defaultValue={theChild && theChild.gender}
              >
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
                    name="childFName"
                    defaultValue={theChild && theChild.childFName}
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
                    name="childLName"
                    defaultValue={theChild && theChild.childLName}
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
                  defaultValue={theChild && theChild.birthDate}
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
                    defaultValue={theChild && theChild.diagnosis.disorder}
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
                    defaultValue={theChild && theChild.diagnosis.establishment}
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
                  defaultValue={theChild && theChild.diagnosis.date}
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>
            </Row>
            <Row>
              <Col>
                <FormLabel>Integration</FormLabel>
                <RadioGroup
                  row
                  name="integrated"
                  defaultValue={theChild && theChild.integration.integrated}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Oui"
                    onChange={(e) => handleChange(e)}
                  />
                  <FormControlLabel
                    value={false}
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
                    defaultValue={theChild && theChild.integration.school}
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
          <Button onClick={() => handleClick()} variant="primary">
            enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Child;
