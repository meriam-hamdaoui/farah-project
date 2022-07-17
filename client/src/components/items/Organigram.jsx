import React from "react";
import { Card } from "react-bootstrap";
import { divStyle, iframStyle } from "../constant/constant";
import "../pages/About.css";

const Organigram = () => {
  return (
    <Card>
      <h3 className="organigram">l'hiérarchie de notre équipe</h3>
      <div style={divStyle}>
        <iframe
          title="organigram"
          loading="lazy"
          style={iframStyle}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFGDs89aCo&#x2F;view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>
      {/* <img src="images/hierarchie.png" alt="l'equipe" /> */}
    </Card>
  );
};

export default Organigram;
