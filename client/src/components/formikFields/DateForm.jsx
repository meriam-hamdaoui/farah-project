import React from "react";
import { Grid, FormControl, FormLabel } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

const DateForm = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Grid item xs={12}>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Field
          name={name}
          fullWidth
          variant="outlined"
          required
          autoComplete="off"
        >
          {({ form, field }) => {
            // set a value programatically in the field state
            const { setFieldValue } = form;
            return (
              <DatePicker
                id={name}
                {...field}
                {...rest}
                selected={field.value}
                onChange={(date) => setFieldValue(name, date)}
              />
            );
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
    </Grid>
  );
};

export default DateForm;
