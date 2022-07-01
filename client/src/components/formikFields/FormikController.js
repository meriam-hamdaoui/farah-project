import React from "react";
import InputForm from "./InputForm";
import TextAreaForm from "./TextAreaForm";
import SelectForm from "./SelectForm";
import RadioButtonForm from "./RadioButtonForm";
import DateForm from "./DateForm";

const FormikController = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <InputForm {...rest} />;
    case "textArea":
      return <TextAreaForm {...rest} />;
    case "select":
      return <SelectForm {...rest} />;
    case "radio":
      return <RadioButtonForm {...rest} />;
    case "date":
      return <DateForm {...rest} />;
    // case "checkbox":
    //   return <CheckBoxeForm {...rest} />;

    default:
      return null;
  }
};

export default FormikController;
