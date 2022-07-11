import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { partners } from "../constant/partners";
import Autisme from "../items/Autisme";
import Partner from "../items/Partner";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [adds, setAdds] = React.useState([]);

  return (
    <Container fluid>
      <Row>
        <div className="banner">
          <h4 className="header">
            Vous avez un enfant avec des besoins spéciaux??
            <br /> Nous sommes à votre disposition
          </h4>
        </div>
      </Row>
      <Container className="home" flex="true">
        <Row>
          <Col fluid xs={24} md={10} className="content-home">
            <Row>
              <div className="card-prq">
                <div className="inner-card">
                  <h1>Pourquoi Nous?</h1>
                  <p className="quote mb-3">
                    Face à un enfant atteint d'autisme, ainsi que ceux avec des
                    besoins spéciaus, certains ne savent pas comment réagir.
                    <br />
                    Pour les aider et lever le voile sur ce sujet tabou, nous
                    intervenonts : <br />
                    <Link to="/about-us">
                      Association Farah des Enfants Autistes et à Difficultés
                      d'Apprentissage
                    </Link>
                  </p>
                </div>
              </div>
            </Row>
            <Row>
              <div className="card-autisme">
                <h1>Parlons de l'autisme</h1>
                <Autisme />
              </div>
            </Row>
            <Row>
              <div className="card-partener">
                <h1>Nos Partenaires</h1>
                <div className="imgs">
                  {partners.map((el) => (
                    <Partner
                      key={uuidv4()}
                      name={el.name}
                      imgSrc={el.imgSrc}
                      linked={el.linked}
                    />
                  ))}
                </div>
              </div>
            </Row>
          </Col>
          {adds.length !== 0 && (
            <Col className="adds">Keep watching you may join us soon</Col>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
