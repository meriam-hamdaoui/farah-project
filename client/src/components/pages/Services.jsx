import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Copyright from "../footer/Copyright";
import ServicesSlides from "../items/ServicesSlides";
import "./Services.css";

const Services = () => {
  return (
    <Container>
      <Row>
        <div className="services-slides">
          <ServicesSlides />
        </div>
      </Row>
      <Row>
        <Col>
          <div className="services-page">
            Un des principaux axes d'intérêt de l'association, est l'intégration
            <br />
            L'inclusion de nos enfants dans les écoles et instituts publics et
            privés est l'objectif vertical pour nous et pour chaque parent, et
            dans le cadre de cet objectif, notre rôle est:
            <ul>
              <li>
                Définir &nbsp;
                <a
                  href="https://www.unicef.org/mena/media/6656/file/Tunisia%20Country%20Report%20on%20OOSC%20Summary_AR.pdf%20.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  le droit à l'intégration
                </a>
              </li>
              <li>
                Diagnostic du &nbsp;
                <a
                  href="https://www.ordredemaltefrance.org/actions/quels-sont-les-differents-types-dautismes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  type de trouble
                </a>
              </li>
              <li>Recrutement des accompagnateurs</li>
              <li>
                Formation &nbsp;
                <a
                  href="https://www.facebook.com/associationfarahintegrationenfantsautistes/photos/1305443289979676"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  continue
                </a>
                &nbsp; des accompagnateurs
              </li>
              <li>Les cours de soutiens dans toutes les matières</li>
              <li>
                L'accompagnement psychologiques des enfants ainsi que leur
                parents
              </li>
              <li>
                L'insertion professionnelle<span>très bientôt</span>
              </li>
            </ul>
            Pour atteindre notre objectif de sensibilisation et de prise de
            conscience, l'Association Farah, organise:
            <ul>
              <li>Conférences de presse</li>
              <li> Conférences scientifiques </li>
              <li> Rencontres pratiques avec les institutions étatiques</li>
              <li>
                Campagnes de sensibilisation au sein des établissements
                d'enseignement
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="services-footer">
        <Copyright />
      </div>
    </Container>
  );
};

export default Services;
