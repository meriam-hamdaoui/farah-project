import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Form
      action="mailto:associationintegrationbenarous@gmail.com"
      method="post"
      encType="text/plain"
    >
      <Form.Group className="mb-3" controlId="ControlInput1">
        <FloatingLabel
          controlId="floatingInput1"
          label="Nom et Prénom"
          className="mb-3"
        >
          <Form.Control type="text" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlInput2">
        <FloatingLabel
          controlId="floatingInput2"
          label="address mail "
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlInput2">
        <FloatingLabel
          controlId="floatingInput3"
          label="Sujet"
          className="mb-3"
        >
          <Form.Control type="text" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlTextarea1">
        <FloatingLabel
          controlId="floatingInput4"
          label="votre message"
          className="mb-3"
        >
          <Form.Control as="textarea" rows={20} />
        </FloatingLabel>
      </Form.Group>
      <Button type="button">Envoyer</Button>
    </Form>
  );
};

export default ContactUs;
