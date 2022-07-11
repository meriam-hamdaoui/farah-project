import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Association = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="images/hope.jpg" alt="hope" width="620px" height="350px" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/afieabs1.png"
          alt="afieabs1"
          width="620px"
          height="350px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/association.jpg"
          alt="association"
          width="620px"
          height="350px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/afieabs.png"
          alt="afieabs"
          width="620px"
          height="350px"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Association;
