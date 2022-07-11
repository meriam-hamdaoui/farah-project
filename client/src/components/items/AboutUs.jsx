import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {props.tool}
  </Tooltip>
);

const AboutUs = (props) => {
  const { linked, name, imgSrc, tool } = props;
  return (
    <OverlayTrigger overlay={renderTooltip({ tool })}>
      <div className="about_us">
        <a href={linked} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={name} />
        </a>
      </div>
    </OverlayTrigger>
  );
};

export default AboutUs;
