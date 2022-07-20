import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { editAd } from "../../api/admin";
import { setAds, addAdsReducer } from "../../JS/adReducer";

const ModalAd = ({ ad }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [annonce, setAnnonce] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleAnnonce = (e) => {
    const { name, value } = e.target;
    setAnnonce((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const modifier = async () => {
    await editAd(ad._id, annonce);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        modifier
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier l'annonce</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel label="Titre" className="mb-3">
                <Form.Control
                  required
                  type="text"
                  name="title"
                  defaultValue={ad.title}
                  onChange={(e) => handleAnnonce(e)}
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
                  defaultValue={ad.description}
                  onChange={(e) => handleAnnonce(e)}
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
                  defaultValue={ad.link}
                  onChange={(e) => handleAnnonce(e)}
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            fermer
          </Button>
          <Button variant="primary" onClick={modifier}>
            enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAd;
