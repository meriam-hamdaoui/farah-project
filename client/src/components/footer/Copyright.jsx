import React from "react";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <div style={{ marginTop: "50%" }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <small color="inherit"> Farah Association </small>
        <small> {new Date().getFullYear()} </small>
      </Typography>
    </div>
  );
};

export default Copyright;
