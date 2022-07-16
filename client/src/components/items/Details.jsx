import React from "react";
import { bureauTab } from "../constant/constant";
import {
  Container,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Dropdown,
} from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    voir localisation
  </Tooltip>
);

const Bureau = ({ href, local }) => {
  return (
    <Dropdown.Item href={href} target="_blank" rel="noopener noreferrer">
      {local}
    </Dropdown.Item>
  );
};

const Details = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      <Container>
        <Row>
          <Col>
            <OverlayTrigger overlay={renderTooltip}>
              <a
                style={{ width: "3vh" }}
                href="https://www.google.com/maps/dir/?api=1&destination=36.778922069765%2C10.284147262573&fbclid=IwAR3cAV3b9o0csGU7ZYcerHt_6Jb_222k4jM6FtzO4_uv5UsCPwf2zRvter0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLocation />
              </a>
            </OverlayTrigger>
            Association Farah <br />
            14 Avenue El-Alaa Rades <br /> 2040 Radès, Tunisie
          </Col>
          <Col>
            <BsPhone /> (+216) 98 349 998
          </Col>
          <Col>
            <AiOutlineMail /> associationintegrationbenarous@gmail.com
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="outline" id="dropdown-basic">
                Autres Locaux
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {bureauTab.map((el) => (
                  <Bureau key={el.key} href={el.maps} local={el.name} />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
