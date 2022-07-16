import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { partners } from "../constant/partners";
import Autisme from "../items/Autisme";
import Partner from "../items/Partner";
import { v4 as uuidv4 } from "uuid";
import { fetchAds } from "../../api/fetchs";
import { setAds } from "../../JS/adReducer";
import Ad from "../items/Ad";
import "./Home.css";
import Copyright from "../footer/Copyright";

const Home = () => {
  const adsFromReducer = useSelector((state) => state.ad);
  // console.log("adsFromReducer =>", adsFromReducer);
  const dispatch = useDispatch();

  const getAllAds = async () => {
    const data = await fetchAds();
    dispatch(setAds(data));
  };

  useEffect(() => {
    getAllAds();
  }, [adsFromReducer]);

  return (
    <Container>
      <Row>
        <div className="home-acceuil">
          <h4 className="home-disposition">
            Vous avez un enfant avec des besoins spéciaux?
            <br />
            <span>Nous sommes à votre disposition</span>
          </h4>
        </div>
      </Row>
      <Row>
        <Col xs={adsFromReducer ? 12 : 24} md={adsFromReducer ? 8 : 10}>
          <Row>
            <div className="home-prq">
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
        {adsFromReducer && (
          <Col xs={6} md={4}>
            <div style={{ marginTop: "10rem", marginLeft: "5rem" }}>
              {adsFromReducer.map((el) => (
                <Ad key={uuidv4()} ad={el} />
              ))}
            </div>
          </Col>
        )}
      </Row>
      <div className="services-footer">
        <Copyright />
      </div>
    </Container>
  );
};

export default Home;
