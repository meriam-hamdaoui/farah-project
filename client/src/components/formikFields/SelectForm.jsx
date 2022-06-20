import React from "react";
import Select from "react-select";
import { Field, ErrorMessage, useField } from "formik";
import { Grid } from "@mui/material";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

const SelectForm = (props) => {
  const { name, values, sm, options, ...rest } = props;

  const [field, meta, helpers] = useField(name);

  console.log("field => ", field);
  console.log("meta => ", meta);
  console.log("helpers => ", helpers);

  return (
    <Grid item xs={12} sm={sm}>
      <Field
        as={Select}
        name={name}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        options={options}
        required
        fullWidth
        variant="outlined"
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>

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

export default SelectForm;
