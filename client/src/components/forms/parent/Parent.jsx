import React, { Fragment } from "react";
import User from "../User";
import { Formik, Form } from "formik";
import { Typography } from "@mui/material";

import FormikController from "../../formikFields/FormikController";
import { statusOptions, parentValues } from "../../constant/parent";

const Parent = () => {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Formik initialValues={parentValues}>
        {(values, getFieldProps) => (
          <Form>
            <User />
            <br />
            <FormikController
              control="radio"
              label="Status "
              name="status"
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
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default Parent;
