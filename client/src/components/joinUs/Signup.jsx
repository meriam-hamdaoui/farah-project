import React, { useState } from "react";
import Select from "react-select";
import FormikController from "../formikFields/FormikController";
import {
  Button,
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
  CssBaseline,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Formik, Form } from "formik";
import {
  stateOptions,
  SX_Styling,
  signUpValidation,
  handleSubmit,
  userInitialValues,
  handleChange,
} from "../constant/constant";

const theme = createTheme();

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <VpnKeyIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Formik
                initialValues={userInitialValues}
                validationSchema={signUpValidation}
                onSubmit={handleSubmit}
                handleChange={handleChange}
              >
                {({ values, getFieldProps, setFieldValue }) => {
                  return (
                    <Form>
                      <Grid container spacing={2}>
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
                                  onClick={() =>
                                    setShowPassword(showPassword ? false : true)
                                  }
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
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
                                  onClick={() =>
                                    setShowConfirm(showConfirm ? false : true)
                                  }
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
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
                        <FormLabel
                          style={{ marginTop: "5%", marginLeft: "5%" }}
                        >
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

                        <Grid item xs={12}>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                              I'm a
                            </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue={values.parent}
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value={values.parent}
                                control={<Radio />}
                                label="Parent"
                              />
                              <FormControlLabel
                                value={values.consultant}
                                control={<Radio />}
                                label="Consultant"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Continue
                          </Button>
                          <Button
                            type="btn"
                            fullWidth
                            variant=""
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Cancel
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} sx={SX_Styling} />
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
