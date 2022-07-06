import React from "react";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
  CssBaseline,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { SX_Styling } from "../constant/constant";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Signup = (props) => {
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
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registration Form
            </Typography>
            <br />
            <Box sx={{ mt: 1 }}>{props.children}</Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} sx={SX_Styling} />
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
