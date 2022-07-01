import React, { useState } from "react";
import { IconButton, InputAdornment, FormLabel } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { stateOptions } from "../constant/constant";
import FormikController from "../formikFields/FormikController";

const userOptions = [
  { key: "Parent", value: "parent" },
  { key: "Consultant", value: "consultant" },
];

const User = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <FormikController
        sm={6}
        control="input"
        name="firstName"
        label="first Name"
      />
      <br />
      <FormikController
        sm={6}
        control="input"
        name="lastName"
        label="last Name"
      />
      <br />
      <FormikController
        control="input"
        name="email"
        label="email"
        type="email"
      />
      <br />
      <FormikController
        sm={6}
        control="input"
        name="password"
        label="Password"
        type={showPassword ? "txt" : "password"}
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
      <br />
      <FormikController
        sm={6}
        control="input"
        name="confirmPassword"
        label="Confirm Password "
        type={showConfirm ? "txt" : "password"}
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
      <br />
      <FormikController
        control="input"
        type="phone"
        name="phone"
        label="phone"
      />

      <FormLabel style={{ marginTop: "5%", marginLeft: "5%" }}>
        Address
      </FormLabel>

      <FormikController
        control="input"
        name="address.street"
        label="street"
        placeholder="street address"
      />
      <br />
      <FormikController
        sm={6}
        control="input"
        name="address.city"
        label="city"
        placeholder="city"
      />
      <br />
      <FormikController
        sm={6}
        control="input"
        name="address.zipCode"
        label="zip Code"
        placeholder="zip Code "
      />
      <br />
      <FormikController
        control="select"
        name="address.state"
        options={stateOptions}
      />
    </>
  );
};

export default User;
