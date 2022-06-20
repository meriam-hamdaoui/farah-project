import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Grid } from "@mui/material";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

const InputForm = (props) => {
  const { name, label, placeholder, values, type, sm, errors, ...rest } = props;

  return (
    <Grid item xs={12} sm={sm}>
      <Field
        as={TextField}
        name={name}
        value={`${values}.${name}`}
        id={`outlined-${name}`}
        label={label}
        placeholder={label}
        type={type}
        {...rest}
        fullWidth
        variant="outlined"
        required
        autoComplete="off"
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

export default InputForm;
