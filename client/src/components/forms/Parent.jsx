import React from "react";
import FormikController from "../formikFields/FormikController";
import { statusOptions } from "../constant/parent";
import { Form } from "formik";
import { Button, Grid } from "@mui/material";
import User from "../forms/User";
import { useNavigate } from "react-router-dom";

export const parent = [{ key: "Parent", value: "parent" }];

const Parent = () => {
  const navigate = useNavigate();
  return (
    <Form>
      <Grid container spacing={2}>
        <FormikController
          control="radio"
          label="I'm a "
          name="category"
          options={parent}
        />
        <User />
        <FormikController
          control="radio"
          label="Civil status  "
          name="civil"
          options={statusOptions}
        />
        <br />
        <FormikController control="input" name="job" label="Job" />
        <br />
        <FormikController
          control="input"
          name="familyMembers"
          type="number"
          label="Number of family Members "
        />
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

export default Parent;
