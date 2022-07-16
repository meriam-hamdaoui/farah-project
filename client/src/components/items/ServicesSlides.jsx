import React from "react";
import { Carousel } from "react-bootstrap";

const ServicesSlides = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="images/integration_scolaire_1.jpg"
          alt="integration_scolaire_1"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/integration_sociale_1.jpg"
          alt="images/integration_sociale_1"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/integration_sociale_2.jpg"
          alt="integration_sociale_2"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/formation1.jpg"
          alt="formation1"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/formation2.jpg"
          alt="formation2"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/integration_scolaire_2.jpg"
          alt="integration_scolaire_2"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/integration_scolaire_3.jpg"
          alt="integration_scolaire_3"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/sensibilisation_1.jpg"
          alt="sensibilisation_1"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/sensibilisation_2.jpg"
          alt="sensibilisation_2"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/sensibilisation_3.jpg"
          alt="sensibilisation_3"
          width="100%"
          height="550vh"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ServicesSlides;
