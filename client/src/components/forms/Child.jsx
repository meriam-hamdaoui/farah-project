import React, { Fragment } from "react";
import { Typography, FormLabel } from "@mui/material";
import { Formik, Form } from "formik";
import FormikController from "../formikFields/FormikController";
import { initialValues, integration, childSchema } from "../constant/child";

const Child = () => {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Child informations
      </Typography>
      <Formik initialValues={initialValues} validationSchema={childSchema}>
        {({ values }) => (
          <Form>
            <FormikController
              sm={6}
              control="input"
              name="childFName"
              label="first Name"
            />
            <br />
            <FormikController
              sm={6}
              control="input"
              name="childLName"
              label="last Name"
            />
            <br />
            <FormikController
              control="date"
              name="birthDate"
              label="Birth Date"
            />
            <FormLabel style={{ marginTop: "5%", marginLeft: "5%" }}>
              Disorder Details
            </FormLabel>
            <FormikController
              sm={6}
              control="input"
              name="disorder.disType"
              label="Disorder Type"
            />
            <br />
            <FormikController
              sm={6}
              control="input"
              name="disorder.disEstablishment"
              label="Establishment"
            />
            <br />
            <FormikController
              control="date"
              name="disorder.disDate"
              label="Date of Diagnosis"
            />
            <br />
            <FormikController
              control="radio"
              label="Integrated "
              name="integration.integrated"
            />
            {values.integration.integrated === "yes" && (
              <FormikController
                sm={6}
                control="input"
                name="integration.integEstablishment"
                label="Establishment"
              />
            )}
            <FormikController
              control="date"
              name="inscritDate"
              label="Inscription Date"
            />
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default Child;
