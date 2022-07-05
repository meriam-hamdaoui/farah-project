import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navBar">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="../logo.png"
            width="40"
            height="35"
            className="d-inline-block align-top"
          />
          Farah Association for Autistic Children and Special Needs
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav as={Link} to="/sign-in">
            Sign In
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
