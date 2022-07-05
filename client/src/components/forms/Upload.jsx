import React, { useRef } from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Grid } from "@mui/material";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

const Upload = (props) => {
  const { name, label, placeholder, values, type, sm, errors, ...rest } = props;
  const fileInput = useRef();
  return (
    <Grid item xs={12} sm={sm}>
      <Field
        as={TextField}
        name={name}
        id={name}
        label={label}
        type="file"
        {...rest}
        variant="outlined"
        required
        autoComplete="off"
        ref={fileInput}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <small style={{ color: "red" }}>
            <DangerousOutlinedIcon /> {msg}
          </small>
        )}
      </ErrorMessage>
    </Grid>
  );
};

export default Upload;
