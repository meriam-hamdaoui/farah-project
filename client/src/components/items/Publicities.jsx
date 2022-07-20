import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Publicity from "../forms/Publicity";
import Ad from "../items/Ad";
import { fetchAds } from "../../api/fetchs";
import { setAds, addAdsReducer } from "../../JS/adReducer";
import { publierAd, editAd } from "../../api/admin";

const Publicities = () => {
  const adsFromReducer = useSelector((state) => state.ad);
  // console.log("adsFromReducer =>", adsFromReducer);
  const dispatch = useDispatch();

  const [pub, setPub] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChangePub = (e) => {
    const { name, value } = e.target;
    setPub((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const publier = async () => {
    // console.log("publier pub =>", pub);
    await publierAd(pub);
    dispatch(addAdsReducer(pub));
  };

  //mapage
  const getAllAds = async () => {
    const data = await fetchAds();
    dispatch(setAds(data));
  };
  useEffect(() => {
    getAllAds();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Publicity
            handleChangePub={handleChangePub}
            pub={pub}
            publier={publier}
          />
        </Col>
        <Col>
          {adsFromReducer &&
            adsFromReducer.map((el) => <Ad key={uuidv4()} ad={el} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default Publicities;
