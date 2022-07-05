import React from "react";
import FormikController from "../formikFields/FormikController";
import { Form } from "formik";
import { Button, Grid, FormLabel } from "@mui/material";
import User from "../forms/User";
import { useNavigate } from "react-router-dom";
import { genders } from "../constant/consultant";
import Upload from "./Upload";

const consultant = [{ key: "Consultant", value: "consultant" }];

const Consultant = () => {
  const navigate = useNavigate();
  return (
    <Form>
      <Grid container spacing={2}>
        <FormikController
          control="radio"
          label="I'm a "
          name="category"
          options={consultant}
        />
        <User />
        <FormikController
          control="radio"
          label="Gender "
          name="gender"
          options={genders}
        />
        <br />
        <FormikController control="input" name="domain" label="Domain" />
        <br />
        <Grid item xs={12} sm={6}>
          <FormLabel style={{ marginTop: "5%", marginLeft: "5%" }}>
            Eduction
          </FormLabel>
          <FormikController control="input" name="degree" label="Degree" />
          <FormikController
            control="input"
            name="university"
            label="University"
          />
          <Upload />
        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <FormLabel style={{ marginTop: "5%", marginLeft: "5%" }}>
            Experiences
          </FormLabel>
          <FormikController control="input" name="title" label="Title" />
          <FormikController control="input" name="company" label="Company" />
          <Upload />
        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <FormLabel style={{ marginTop: "5%", marginLeft: "5%" }}>
            Internship
          </FormLabel>
          <FormikController control="input" name="title" label="Title" />
          <FormikController control="input" name="company" label="Company" />
          <Upload />
        </Grid>
        <br />

        <FormikController control="textArea" name="demandes" label="Demandes" />
        <Grid item xs={12}>
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>

          <Button
            type="btn btn-danger"
            variant="warning"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => navigate("/sign-up", { replace: true })}
          >
            Go Back
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default Consultant;
