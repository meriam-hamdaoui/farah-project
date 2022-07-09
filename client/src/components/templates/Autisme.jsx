import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";

const Autisme = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Ls38oqKOKbQ"
          width="920px"
          height="420px"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>C'est Quoi?</h3>
          <p style={{ color: "black" }}>
            Simple description annimé pour les mieux comprendre.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=P5YDIQwt1xE&t=43s"
          width="920px"
          height="420px"
        />
        <Carousel.Caption>
          <h3>comment diagnostiquer l'autisme</h3>
          <p>Un expert est nécessaire pour faire un diagnostique adéquats.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=CsrThF0Ok4M&t=21s"
          width="920px"
          height="420px"
        />
        <Carousel.Caption>
          <h3>Startégies</h3>
          <p>
            Les stratégies de prose en charge des enfants avec troubles du
            spectre de l'autisme.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Autisme;
