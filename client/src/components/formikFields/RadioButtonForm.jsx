import React from "react";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

import { ErrorMessage, Field } from "formik";
import { FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material";

const RadioButtonForm = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <FormControlLabel
                  control={<Radio />}
                  id={option.value}
                  {...field}
                  value={option.value}
                  label={option.key}
                  checked={field.value === option.value}
                  onClick={() => console.log(option.value)}
                />
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => (
          <small style={{ color: "red" }}>
            <DangerousOutlinedIcon /> {msg}
          </small>
        )}
      </ErrorMessage>
    </FormControl>
  );
};

export default RadioButtonForm;
