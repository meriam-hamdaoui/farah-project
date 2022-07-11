import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { divStyle, iframStyle } from "../constant/constant";

const Achievement = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div style={divStyle}>
            <iframe
              loading="lazy"
              style={iframStyle}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFGEGgrnag&#x2F;view?embed"
              allowFullScreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
        </Col>
        <Col>
          <div style={divStyle}>
            <iframe
              loading="lazy"
              style={iframStyle}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFGEAEYnZE&#x2F;view?embed"
              allowFullScreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;
