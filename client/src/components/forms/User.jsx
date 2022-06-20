import React, { useState } from "react";
import { Field } from "formik";
import Select from "react-select";
import { TextField, Grid, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { stateOptions } from "../constant/constant";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

import { useField } from "formik";

const User = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldTouched,
  setFieldValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="Mariem"
          />
          {errors.firstName && touched.firstName && (
            <small>
              <DangerousOutlinedIcon /> {errors.firstName}
            </small>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="Hamdaoui"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="mariem@gmail.com"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type={showPassword ? "txt" : "password"}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setShowPassword(showPassword ? false : true)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            name="confirmPassword"
            label="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            type={showConfirm ? "txt" : "password"}
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="confirm password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setShowConfirm(showConfirm ? false : true)}
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            label="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="(+xxx) xx-xxx-xxx"
          />
        </Grid>
        <br />
        <span>Address</span>
        <Grid item xs={12}>
          <Field
            as={TextField}
            name="address.street"
            label="street"
            value={values.address.street}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="street address"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            name="address.city"
            label="city"
            value={values.address.city}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="city"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            name="address.zipCode"
            label="zip code"
            value={values.address.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            required
            autoComplete="off"
            placeholder="zip code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={Select}
            onBlur={() => setFieldTouched("state", true)}
            onChange={(option) => {
              setFieldValue("state", option);
            }}
            name="address.state"
            required
            placeholder="select state ..."
            options={stateOptions}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default User;
