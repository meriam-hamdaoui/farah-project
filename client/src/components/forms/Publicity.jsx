import React from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

const Publicity = ({ handleChangePub, pub, publier }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <FloatingLabel label="Titre" className="mb-3">
          <Form.Control
            required
            type="text"
            name="title"
            value={pub.title}
            onChange={(e) => handleChangePub(e)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <FloatingLabel label="Description" className="mb-3">
          <Form.Control
            required
            as="textarea"
            rows={3}
            name="description"
            value={pub.description}
            onChange={(e) => handleChangePub(e)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <FloatingLabel label="Lien" className="mb-3">
          <Form.Control
            type="url"
            name="link"
            id="url"
            size="30"
            required
            value={pub.link}
            onChange={(e) => handleChangePub(e)}
          />
        </FloatingLabel>
      </Form.Group>
      <Button onClick={publier}>Publier</Button>
    </Form>
  );
};

export default Publicity;
