import * as yup from "yup";

export const initialValues = {
  childFName: "",
  childLName: "",
  birthDate: null,
  disorder: {
    disType: "",
    disEstablishment: "",
    disDate: null,
  },
  integration: {
    integrated: "",
    integEstablishment: "",
  },
  inscritDate: Date.now(),
};

export const childSchema = yup.object().shape({
  childFName: yup.string().required("enter your child first name"),
  childLName: yup.string().required("enter your child last name"),
  birthDate: yup.date().required("select your child birth date"),
  disorder: yup.object().shape({
    disType: yup.string().required("enter your child disorder type"),
    disEstablishment: yup
      .string()
      .required("where did your child had his diagnosis"),
    disDate: yup.date().required("select when your child had his diagnosis"),
  }),
  integration: yup.object().shape(
    {
      integrated: yup
        .string()
        .required("is your child integrated in any establishment"),
      integEstablishment: yup
        .string()
        .notRequired()
        .when("integreted", {
          is: (val) => val === "yes",
          then: yup
            .string()
            .required(
              "since your child is integrated specify the establishment where did he goes"
            ),
          otherwise: yup.string().notRequired(),
        }),
    },
    ["integrated", "integEstablishment"]
  ),
  inscritDate: yup
    .date()
    .required("select when your child joined the association"),
});

export const integration = [
  { key: "Yes", value: "yes" },
  { key: "No", value: "no" },
];
