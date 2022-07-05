import React from "react";
import { Field, ErrorMessage } from "formik";
import { Grid, FormLabel } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

const TextAreaForm = (props) => {
  const { name, label, placeholder, values, type, sm, errors, ...rest } = props;

  return (
    <Grid item xs={12}>
      <FormLabel>{label}</FormLabel>
      <Field
        as={TextareaAutosize}
        name={name}
        id={name}
        placeholder="How can we help you??"
        type={type}
        {...rest}
        maxRows={4}
        style={{ width: 200 }}
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

export default TextAreaForm;
