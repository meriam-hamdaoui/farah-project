import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const JoinUs = () => {
  return (
    <>
      <Nav className="me-auto d-flex flex-row align-content-center justify-content-center space-between">
        <Navbar.Brand as={Link} to="/join-us/sign-in">
          Login
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/join-us/sign-up">
          Register
        </Navbar.Brand>
      </Nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default JoinUs;
