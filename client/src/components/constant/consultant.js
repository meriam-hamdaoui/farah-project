import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const consultantValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  address: {
    street: "",
    zipCode: "",
    city: "",
    state: "",
  },
  category: "consultant",
  gender: "Male",
  domain: "",
  education: [
    {
      degree: "",
      university: "",
      diploma: "",
    },
  ],
  experiences: [
    {
      title: "",
      company: "",
      certificate: "",
    },
  ],
  internships: [
    {
      title: "",
      company: "",
      certificate: "",
    },
  ],
  offers: "",
};

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const consultantSchema = yup.object().shape({
  firstName: yup.string().required("enter your first Name please"),
  lastName: yup.string().required("enter your last Name please"),
  email: yup
    .string()
    .email("invalid email")
    .required("this field is required"),
  password: yup
    .string()
    .required("this field is required")
    .matches(/([0-9])/, "your password should contain a number at least")
    .min(8, "your password must have 8 caracteres as minimum")
    .max(12, "your password must have 12 caracteres as maximum"),
  confirmPassword: yup
    .string()
    .required("confirm your password")
    .oneOf([yup.ref("password"), null], "password don't mutch"),
  phone: yup
    .string()
    .matches(phoneRegExp, "invalid phone number")
    .required("phone number is required"),
  address: yup.object().shape({
    street: yup.string().required("this field is required"),
    zipCode: yup.number().required("this field is required"),
    city: yup.string().required("this field is required"),
    state: yup.object().shape({
      id: yup.string().required("Please, select your resident state"),
    }),
  }),
  category: yup.string().required("Are you a consultant?"),
  gender: yup.string().required("Choose"),
  domain: yup.string().required("this field is required"),
  eduction: yup.array().of(
    yup.object().shape({
      degree: yup.string().required("this field is required"),
      university: yup.string().required("this field is required"),
      diploma: yup
        .mixed()
        .test(500, "image size is too large", (value) => value.size <= 500)
        .test("fileType", "unsupported file format", (value) =>
          SUPPORTED_FORMATS.includes(value.type)
        ),
    })
  ),
  experiences: yup.array().of(
    yup.object().shape({
      title: yup.string().required("this field is required"),
      company: yup.string().required("this field is required"),
      certificate: yup
        .mixed()
        .test(500, "image size is too large", (value) => value.size <= 500)
        .test("fileType", "unsupported file format", (value) =>
          SUPPORTED_FORMATS.includes(value.type)
        ),
    })
  ),
  internships: yup.array().of(
    yup.object().shape({
      title: yup.string().required("this field is required"),
      company: yup.string().required("this field is required"),
      certificate: yup
        .mixed()
        .test(500, "image size is too large", (value) => value.size <= 500)
        .test("fileType", "unsupported file format", (value) =>
          SUPPORTED_FORMATS.includes(value.type)
        ),
    })
  ),
  demandes: yup.string().required("this field is required"),
});

export const genders = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
];
