import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    visitez le site officel
  </Tooltip>
);

const Partner = (props) => {
  const { linked, name, imgSrc } = props;
  return (
    <OverlayTrigger overlay={renderTooltip}>
      <div className="partner">
        <a href={linked} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={name} />
        </a>
      </div>
    </OverlayTrigger>
  );
};

export default Partner;
