import React from "react";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
  CssBaseline,
} from "@mui/material";

import VpnKeyIcon from "@mui/icons-material/VpnKey";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Formik, Form } from "formik";
import {
  SX_Styling,
  handleChange,
  signUpValidation,
  handleSubmit,
  userInitialValues,
} from "../constant/constant";
import User from "../forms/User";

const theme = createTheme();

const Signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
                handleChange={handleChange}
                validationSchema={signUpValidation}
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
                    setFieldTouched,
                    setFieldValue,
                  } = props;
                  return (
                    <Form onSubmit={handleSubmit}>
                      <User
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        setFieldTouched={setFieldTouched}
                        setFieldValue={setFieldValue}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Box>
        </Grid>

        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={SX_Styling} />
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
