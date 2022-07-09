import React from "react";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <small color="inherit"> Farah Association </small>
      <small> {new Date().getFullYear()} </small>
      <br />
      <small>by HAMDAOUI Mariem</small>
    </Typography>
  );
};

export default Copyright;
