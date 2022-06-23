import React, { Fragment } from "react";
import User from "../User";
import { Formik, Form } from "formik";
import { Typography } from "@mui/material";

import FormikController from "../../formikFields/FormikController";
import { statusOptions, parentValues } from "../../constant/parent";

const Parent = () => {
  return (
    <Fragment>
      <Typography>Personal Details</Typography>
      <Formik initialValues={parentValues}>
        {(values, getFieldProps) => (
          <Form>
            <User fields={getFieldProps} />
            <FormikController
              control="radio"
              label="Status "
              name="status"
              options={statusOptions}
            />
            <FormikController
              control="input"
              name="job"
              label="Job"
              fields={getFieldProps}
            />
            <br />
            <FormikController
              control="input"
              name="familyMembers"
              type="number"
              label="Number of family Members "
              fields={getFieldProps}
            />
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default Parent;
