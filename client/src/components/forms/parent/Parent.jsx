import React from "react";
import User from "../User";
import { Formik, Form } from "formik";

import { handleChange, handleSubmit } from "../../constant/constant";

const Parent = () => {
  return (
    <Formik
      initialValues={{ parent: "" }}
      onSubmit={handleSubmit}
      handleChange={handleChange}
    >
      <Form>
        somthing to prouve
        {({ values, getFieldProps }) => (
          <User values={values} getFieldProps={getFieldProps} />
        )}
      </Form>
    </Formik>
  );
};

export default Parent;
