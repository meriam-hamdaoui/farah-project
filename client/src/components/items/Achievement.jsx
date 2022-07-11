import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const divStyle_1 = {
  position: "relative",
  width: "100%",
  height: 0,
  paddingTop: "75.0000%",
  paddingBottom: "48px",
  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
  marginTop: "1.6em",
  marginBottom: "0.9em",
  overflow: "hidden",
  borderRadius: "8px",
  willChange: "transform",
};
const iframStyle_1 = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  border: "none",
  padding: 0,
  margin: 0,
};
const divStyle_2 = {
  position: "relative",
  width: "100%",
  height: 0,
  paddingTop: "75.0000%",
  paddingBottom: "48px",
  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
  marginTop: "1.6em",
  marginBottom: "0.9em",
  overflow: "hidden",
  borderRadius: "8px",
  willChange: "transform",
};

const iframStyle_2 = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  border: "none",
  padding: 0,
  margin: 0,
};
const Achievement = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div style={divStyle_1}>
            <iframe
              loading="lazy"
              style={iframStyle_1}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFGEGgrnag&#x2F;view?embed"
              allowFullscreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
        </Col>
        <Col>
          <div style={divStyle_2}>
            <iframe
              loading="lazy"
              style={iframStyle_2}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFGEAEYnZE&#x2F;view?embed"
              allowFullscreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;
