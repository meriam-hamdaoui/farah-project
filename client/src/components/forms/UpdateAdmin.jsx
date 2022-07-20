import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { editAdmin } from "../../api/admin";

const UpdateAdmin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const modification = async () => {
    await editAdmin(admin);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        modification
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier moes données</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Nom" className="mb-3">
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      onChange={(e) => handleChange(e)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Prénom" className="mb-3">
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      onChange={(e) => handleChange(e)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Mot de passe" className="mb-3">
                    <Form.Control
                      required
                      type="password"
                      name="password"
                      onChange={(e) => handleChange(e)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Confirmer" className="mb-3">
                    <Form.Control
                      required
                      type="password"
                      name="confirmPassword"
                      onChange={(e) => handleChange(e)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modification}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateAdmin;
