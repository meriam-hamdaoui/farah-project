import React from "react";
import { Card } from "react-bootstrap";

const divStyle = {
  position: "relative",
  width: "100%",
  height: 0,
  paddingTop: "56.2500%",
  paddingBottom: "48px",
  boxShadow: "0 2px 8px rgba(63,69,81,0.16)",
  marginTop: "1.6em",
  marginBottom: "0.9em",
  overFlow: "hidden",
  borderRadius: "8px",
  wilChange: "transform",
};
const iframStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  border: "none",
  padding: 0,
  margin: 0,
};

const Organigram = () => {
  return (
    <Card>
      <h3>l'hiérarchie de notre équipe</h3>
      <div style={divStyle}>
        <iframe
          loading="lazy"
          style={iframStyle}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFGDs89aCo&#x2F;view?embed"
          allowFullscreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>
      {/* <img src="images/hierarchie.png" alt="l'equipe" /> */}
    </Card>
  );
};

export default Organigram;
