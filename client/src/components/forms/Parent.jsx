import React from "react";
import FormikController from "../formikFields/FormikController";
import { statusOptions } from "../constant/parent";
import { Form } from "formik";
import { Button, Grid } from "@mui/material";
import User from "../forms/User";
import { useNavigate } from "react-router-dom";
import { userOptions } from "../constant/signUser";

const Parent = () => {
  const navigate = useNavigate();
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
        <FormikController control="input" name="demandes" label="demandes" />
        <Grid item xs={12}>
          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>

          <Button
            type="btn btn-danger"
            fullWidth
            variant=""
            sx={{ mt: 3, mb: 2 }}
            onClick={() => navigate("/", { replace: true })}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default Parent;
