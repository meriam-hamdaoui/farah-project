import React from "react";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
  CssBaseline,
} from "@mui/material";
import { SX_Contact } from "../constant/constant";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MdContactMail } from "react-icons/md";
import ContactUs from "../forms/ContactUs";
import Details from "../items/Details";
import { Container, Row } from "react-bootstrap";
import Copyright from "../footer/Copyright";

const theme = createTheme();

const Contacts = () => {
  return (
    <Container>
      <Row>
        <Details />
      </Row>
      <Row>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} sx={SX_Contact}></Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
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
                  <MdContactMail />
                </Avatar>
                <Typography component="h1" variant="h5"></Typography>
                <br />
                <Box sx={{ mt: 1 }}>
                  <ContactUs />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
        <div className="services-footer">
          <Copyright />
        </div>
      </Row>
    </Container>
  );
};

export default Contacts;
