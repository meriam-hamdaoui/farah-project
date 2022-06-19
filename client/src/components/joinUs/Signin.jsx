import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Link,
  Checkbox,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Formik, Form, Field } from "formik";
import {
  SX_Styling,
  handleChange,
  signInValidation,
  handleSubmit,
} from "../constant/constant";

const theme = createTheme();

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={SX_Styling} />
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
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  remember: false,
                }}
                handleChange={handleChange}
                validationSchema={signInValidation}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const {
                    values,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    touched,
                    errors,
                  } = props;
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div>
                        <Field
                          as={TextField}
                          label="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          margin="normal"
                          required
                          fullWidth
                          id="outlined-basic"
                          variant="outlined"
                          autoComplete="off"
                        />
                        {errors.email && touched.email && (
                          <small style={{ color: "red" }}>{errors.email}</small>
                        )}
                      </div>
                      <div>
                        <Field
                          as={TextField}
                          name="password"
                          label="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type={showPassword ? "text" : "password"}
                          margin="normal"
                          required
                          fullWidth
                          id="outlined-basic"
                          variant="outlined"
                          autoComplete="off"
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
                        {errors.password && touched.password && (
                          <small style={{ color: "red" }}>
                            {errors.password}
                          </small>
                        )}
                      </div>
                      <Field
                        as={FormControlLabel}
                        control={
                          <Checkbox
                            name="remember"
                            value={values.remember}
                            color="primary"
                          />
                        }
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Signin;
