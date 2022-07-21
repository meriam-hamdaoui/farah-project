import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { AiOutlineLogout, CgProfile, AiOutlineLogin } from "react-icons/all";

const NavBar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log("token from navbar =>", token);
  const role = localStorage.getItem("role");
  // console.log("role from navbar =>", typeof role);

  const logout = () => {
    localStorage.clear();
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

  const handleNavigate = () => {
    navigate("/sign-in", { replace: true });
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/navbar.png"
            width="40"
            height="35"
            className="d-inline align-top logo"
          />
          <span className="association-farah">
            Association Farah des Enfants Autistes et à Difficultés
            d'apprentissage
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          {token && Number(role) === 0 && (
            <NavDropdown title="dashboard" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/dashboard">Graphe</NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/children">
                Enfants
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/parents">
                Parents
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/consultants">
                Consultants
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/ads">
                Annonces
              </NavDropdown.Item>
            </NavDropdown>

            // <Nav
            //   className="nav-admin me-auto my-2 my-lg-0"
            //   style={{ maxHeight: "100px" }}
            //   navbarScroll
            // >
            //   <NavLink to="/dashboard">dashboard</NavLink>
            //   <NavLink to="/dashboard/children">enfants</NavLink>
            //   <NavLink to="/dashboard/parents">parents</NavLink>
            //   <NavLink to="/dashboard/consultants">consultants</NavLink>
            //   <NavLink to="/dashboard/ads">annonces</NavLink>
            // </Nav>
          )}

          {token && role ? (
            <>
              <button onClick={() => handleProfil()} className="btn-icons">
                <CgProfile /> Profil
              </button>
              <Button onClick={() => logout()} className="logout">
                Déconnecter
                <AiOutlineLogout />
              </Button>
            </>
          ) : (
            <button className="btn-icons" onClick={() => handleNavigate()}>
              Connecter <AiOutlineLogin />
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
