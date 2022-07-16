import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Association from "../items/Association";
import AboutUs from "../items/AboutUs";
import Organigram from "../items/Organigram";
import Objectifs from "../items/Objectifs";
import Achievement from "../items/Achievement";
import "./about.css";
import Copyright from "../footer/Copyright";

const About = () => {
  const [organigram, setOrganigram] = useState(false);
  const [objectif, setObjectif] = useState(false);
  const [achievement, setAchievement] = useState(true);

  const ShowOrganigram = () => {
    setOrganigram((organigram) => (organigram ? false : true));
    setObjectif(false);
    setAchievement(false);
  };
  const ShowObjectif = () => {
    setObjectif((objectif) => (objectif ? false : true));
    setOrganigram(false);
    setAchievement(false);
  };
  const ShowAchievement = () => {
    setAchievement((achievement) => (achievement ? false : true));
    setOrganigram(false);
    setObjectif(false);
  };

  return (
    <Container className="about">
      <Row className="the-row">
        <Col>
          <Association />
        </Col>
        <Col>
          <h1>Qui Sommes Nous?</h1>
          <h6>
            Association Farah pour les Enfants Autistes et des Besions Spéciaux
          </h6>
          <p>
            Notre association veut s'assuer que tout le monde en Tunisie sâche
            ce qu'est l'autisme et comment y faire face.
            <br />
            Notre objectif principal est de fournir les soins et les droits pour
            chaque enfants autistes et ceux ayant des besoins spéciaux pour
            qu'ils soient indépendents et faire partie de notre sociéte.
          </p>
          <p>
            Association fondée depuis Janvier 2018, par Mr Neji Sessi, et
            publiée au JORT le 01 Mai du même année.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={() => ShowOrganigram()}>
            <AboutUs
              imgSrc="images/organigram.jpg"
              name="organigram"
              tool="Notre Equipe"
            />
          </button>
        </Col>
        <Col>
          <button onClick={() => ShowObjectif()}>
            <AboutUs
              imgSrc="images/objectifs.jpg"
              name="objectifs"
              tool="Objectifs"
            />
          </button>
        </Col>
        <Col>
          <button onClick={() => ShowAchievement()}>
            <AboutUs
              imgSrc="images/achievement.png"
              name="achievement"
              tool="Réalisation"
            />
          </button>
        </Col>
      </Row>
      <Row>
        {organigram && <Organigram />}
        {objectif && <Objectifs />}
        {achievement && <Achievement />}
      </Row>
      <div className="services-footer">
        <Copyright />
      </div>
    </Container>
  );
};

export default About;
