import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar>
      <Container className="container">
        <Navbar.Collapse>
          <img
            alt=""
            src="/navbar.png"
            width="40"
            height="35"
            className="d-inline align-top"
          />
          Association Farah des Enfants Autistes et à Difficultés
          d'apprentissage
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav as={Link} to="/sign-in">
            Se connecter
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
