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
import { Formik } from "formik";
import { SX_Styling } from "../constant/constant";
import { consultantValues, consultantSchema } from "../constant/consultant";
import Consultant from "../forms/Consultant";

const theme = createTheme();

const SignConsultant = () => {
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
                initialValues={consultantValues}
                validationSchema={consultantSchema}
                component={Consultant}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} sx={SX_Styling} />
      </Grid>
    </ThemeProvider>
  );
};

export default SignConsultant;
