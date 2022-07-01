import React from "react";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

import { ErrorMessage, Field } from "formik";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";

const RadioButtonForm = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <Grid item xs={12}>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name={name}
        >
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
                      name={name}
                      checked={field.value === option.value}
                    />
                  </React.Fragment>
                );
              });
            }}
          </Field>
        </RadioGroup>
        <ErrorMessage name={name}>
          {(msg) => (
            <small style={{ color: "red" }}>
              <DangerousOutlinedIcon /> {msg}
            </small>
          )}
        </ErrorMessage>
      </FormControl>
    </Grid>
  );
};

export default RadioButtonForm;
