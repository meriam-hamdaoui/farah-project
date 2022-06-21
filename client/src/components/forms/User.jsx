import React, { useState } from "react";
import { IconButton, InputAdornment, FormLabel } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { stateOptions } from "../constant/constant";
import FormikController from "../formikFields/FormikController";

const User = ({ getFieldProps }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <FormikController
        sm={6}
        control="input"
        name="firstName"
        label="first Name"
        {...getFieldProps("firstName")}
      />

      <FormikController
        sm={6}
        control="input"
        name="lastName"
        label="last Name"
        {...getFieldProps("lastName")}
      />

      <FormikController
        control="input"
        name="email"
        label="email"
        {...getFieldProps("email")}
      />

      <FormikController
        sm={6}
        control="input"
        name="password"
        label="Password"
        type={showPassword ? "txt" : "password"}
        {...getFieldProps("password")}
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

      <FormikController
        sm={6}
        control="input"
        name="confirmPassword"
        label="Confirm Password "
        type={showConfirm ? "txt" : "password"}
        {...getFieldProps("confirmPassword")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={() => setShowConfirm(showConfirm ? false : true)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormikController
        control="input"
        type="phone"
        name="phone"
        label="phone"
        {...getFieldProps("phone")}
      />

      <br />
      <FormLabel style={{ marginTop: "5%", marginLeft: "5%" }}>
        Address
      </FormLabel>

      <FormikController
        control="input"
        name="address.street"
        label="street"
        placeholder="street address"
        {...getFieldProps("address.street")}
      />

      <FormikController
        sm={6}
        control="input"
        name="address.city"
        label="city"
        placeholder="city"
        {...getFieldProps("address.city")}
      />

      <FormikController
        sm={6}
        control="input"
        name="address.zipCode"
        label="zip Code"
        placeholder="zip Code "
        {...getFieldProps("address.zipCode")}
      />

      <FormikController
        control="select"
        name="address.state"
        options={stateOptions}
      />
    </>
  );
};

export default User;
