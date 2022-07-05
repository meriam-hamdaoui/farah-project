import React from "react";
import { useNavigate } from "react-router-dom";
import FormikController from "../formikFields/FormikController";
import { Form } from "formik";
import { Button, Grid } from "@mui/material";

const userOptions = [
  { key: "Parent", value: "parent" },
  { key: "Consultant", value: "consultant" },
];

const Category = ({ values }) => {
  const navigate = useNavigate();
  const handleClick = (value) => {
    if (value === "parent") {
      navigate("../sign-up/parent", { replace: true });
    } else if (value === "consultant") {
      navigate("../sign-up/consultant", { replace: true });
    } else if (value === "") {
      alert("choose how would you join us");
    }
  };
  return (
    <Form>
      <Grid container spacing={2}>
        <FormikController
          control="radio"
          label="I'm a "
          name="category"
          options={userOptions}
        />
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleClick(values.category)}
          >
            Continue
          </Button>

          <Button
            type="btn btn-danger"
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

export default Category;
