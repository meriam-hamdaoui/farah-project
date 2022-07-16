import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { partners } from "../constant/partners";
import Autisme from "../items/Autisme";
import Partner from "../items/Partner";
import { v4 as uuidv4 } from "uuid";
import { fetchAds } from "../../api/admin";
import { setAdsReducer } from "../../JS/adminReducer";
import Ad from "../items/Ad";
import "./Home.css";

const Home = () => {
  //state
  const adsToDispaly = useSelector((state) => state.admin.ads);
  // console.log("adsToDispaly => ", adsToDispaly);

  const dispatch = useDispatch();

  const getTheAds = async () => {
    const data = await fetchAds();
    console.log("data => ", data);
    dispatch(setAdsReducer(data.adsToGet));
  };

  // const displayAds = async () => {
  //   const data = await fetchAds();
  //   console.log("data => ", data);
  //   dispatch(setAds(data.adsToGet));
  // };
  // console.log("displayAds => ", displayAds);

  useEffect(() => {
    getTheAds();
    console.log("adsToDispaly => ", adsToDispaly);
  }, []);

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
        {/* <div className="a">
          <h4 className="header">
            Vous avez un enfant avec des besoins spéciaux??
            <br /> Nous sommes à votre disposition
          </h4>
        </div> */}
      </Row>

      <Row>
        <Col xs={24} md={10} className="content-home">
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
        {/* {adState.ads.length !== 0 && (
          <Col className="ads">
            {adState.ads.map((el) => (
              <Ad key={uuidv4()} ad={el} />
            ))}
          </Col>
        )} */}
      </Row>
    </Container>
  );
};

export default Home;
