import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = yup.object().shape({
  fName: yup.string().required("enter your first Name please"),
  lName: yup.string().required("enter your last Name please"),
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
    .oneOf([yup.ref("password"), null], "password don't mutch"),

  phone: yup
    .string()
    .matches(phoneRegExp, "invalid phone number")
    .required("phone number is required"),
  street: yup.string().required("this field is required"),
  zipCode: yup.string().required("this field is required"),
  city: yup.string().required("this field is required"),
  state: yup
    .object()
    .shape({ id: yup.string().required("Please, select your resident state") }),
});

export const initialValues = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  street: "",
  zipCode: "",
  city: "",
  state: "",
};

export const stateOptions = [
  { id: 1, value: "Tunis", label: "Tunis" },
  { id: 2, value: "Ariana", label: "Ariana" },
  { id: 3, value: "Ben Arous", label: "Ben Arous" },
  { id: 4, value: "Mannouba", label: "Mannouba" },
  { id: 5, value: "Bizert", label: "Bizert" },
  { id: 6, value: "Nabeul", label: "Nabeul" },
  { id: 7, value: "Beja", label: "Beja" },
  { id: 8, value: "Jendouba", label: "Jendouba" },
  { id: 9, value: "Zaghouan", label: "Zaghouan" },
  { id: 10, value: "Siliana", label: "Siliana" },
  { id: 11, value: "Le Kef", label: "Le Kef" },
  { id: 12, value: "Sousse", label: "Sousse" },
  { id: 13, value: "Monastir", label: "Monastir" },
  { id: 14, value: "Mahdia", label: "Mahdia" },
  { id: 15, value: "Kasserine", label: "Kasserine" },
  { id: 16, value: "Sidi Bouzid", label: "Sidi Bouzid" },
  { id: 17, value: "Kairouan", label: "Kairouan" },
  { id: 18, value: "Gafsa", label: "Gafsa" },
  { id: 19, value: "Safax", label: "Safax" },
  { id: 20, value: "Gabes", label: "Gabes" },
  { id: 21, value: "Medenine", label: "Medenine" },
  { id: 22, value: "Tozeur", label: "Tozeur" },
  { id: 23, value: "Guebili", label: "Guebili" },
  { id: 24, value: "Tataouine", label: "Tataouine" },
];
