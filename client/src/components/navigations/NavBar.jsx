import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Nav, Navbar, Container, Button } from "react-bootstrap";

const NavBar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log("token from navbar =>", token);
  const role = localStorage.getItem("role");
  // console.log("role from navbar =>", typeof role);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };

  const handleProfil = () => {
    if (token && Number(role) === 0) {
      navigate("/dashboard");
    }
    if (token && Number(role) === 1) {
      navigate("/parent/profil");
    }
    if (token && Number(role) === 2) {
      navigate("/consultant/profil");
    }
    // console.log("handleProfil clicked");
  };

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
          {token ? (
            <>
              <Button onClick={() => logout()}>logout</Button>
              <Button onClick={() => handleProfil()}>profil</Button>
            </>
          ) : (
            <Nav as={Link} to="/sign-in">
              Se connecter
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
