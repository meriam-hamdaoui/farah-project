import React, { useState } from "react";
import { Field } from "formik";
import Select from "react-select";
import {
  TextField,
  Grid,
  IconButton,
  InputAdornment,
  FormLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { stateOptions } from "../constant/constant";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

const User = ({ values, handleChange, handleBlur }) => {
  console.log("values => ", values);

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
            onBlur={handleBlur}
            fullWidth
            variant="outlined"
            required
            autoComplete="off"
            placeholder="Mariem"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            label="Last Name"
            name="lastName"
            fullWidth
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
            fullWidth
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
            type={showPassword ? "txt" : "password"}
            fullWidth
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
            fullWidth
            type={showConfirm ? "txt" : "password"}
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
            fullWidth
            variant="outlined"
            required
            autoComplete="off"
            placeholder="(+xxx) xx-xxx-xxx"
          />
        </Grid>
        <br />
        <FormLabel style={{ marginTop: "5%", marginLeft: "5%" }}>
          Address
        </FormLabel>
        <Grid item xs={12}>
          <Field
            as={TextField}
            name="address.street"
            label="street"
            fullWidth
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
            fullWidth
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
            fullWidth
            variant="outlined"
            required
            autoComplete="off"
            placeholder="zip code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={Select}
            name="address.state"
            required
            fullWidth
            placeholder="select state ..."
            options={stateOptions}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default User;
