import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  TextField,
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

import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Formik, Form, Field } from "formik";
import {
  stateOptions,
  SX_Styling,
  handleChange,
  signUpValidation,
  handleSubmit,
  userInitialValues,
} from "../constant/constant";
import User from "../forms/User";

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
              >
                {({ values }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="firstName"
                          label="First Name"
                          value={values.firstName}
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
                                  onClick={() =>
                                    setShowConfirm(showConfirm ? false : true)
                                  }
                                >
                                  {showConfirm ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
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
                )}
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
