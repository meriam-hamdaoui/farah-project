import * as yup from "yup";

export const signInValues = {
  email: "",
  password: "",
  remember: false,
};

export const signInValidation = yup.object().shape({
  email: yup
    .string()
    .email("invalid email")
    .required("this field is required"),
  password: yup.string().required("this field is required"),
});

export const handleSubmit = (e, values, { setSubmitting }) => {
  e.preventDefault();
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
