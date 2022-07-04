import React from "react";
import { useNavigate } from "react-router-dom";
import FormikController from "../formikFields/FormikController";
import {
  Button,
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
import { SX_Styling, handleSubmit, handleChange } from "../constant/constant";
import {
  signUpValidation,
  userInitialValues,
  userOptions,
} from "../constant/signUp";
import Consultant from "../forms/Consultant";
import User from "../forms/User";

const theme = createTheme();

const SignConsultant = () => {
  const navigate = useNavigate();

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
              Sign up Consultant
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Formik
                initialValues={userInitialValues}
                validationSchema={signUpValidation}
                onSubmit={handleSubmit}
                handleChange={handleChange}
              >
                {({ values }) => {
                  return (
                    <Form>
                      <Grid container spacing={2}>
                        <FormikController
                          control="radio"
                          label="I'm a "
                          name="category"
                          options={userOptions}
                        />
                        <User />
                        <Consultant />
                        <Grid item xs={12}>
                          <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Submit
                          </Button>

                          <Button
                            type="btn btn-danger"
                            fullWidth
                            variant=""
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() =>
                              navigate("/sign-up", { replace: true })
                            }
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

export default SignConsultant;
