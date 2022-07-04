import React from "react";
import { useNavigate } from "react-router-dom";
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

import { parentValues, parentSchema } from "../constant/parent";
import Parent from "../forms/Parent";

const theme = createTheme();

const SignParent = () => {
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
              Sign up Parent
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Formik
                initialValues={parentValues}
                validationSchema={parentSchema}
                component={Parent}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} sx={SX_Styling} />
      </Grid>
    </ThemeProvider>
  );
};

export default SignParent;
