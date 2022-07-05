import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const parentValues = {
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
  category: "parent",
  civil: "maried",
  job: "",
  familyMembers: 1,
  demandes: "",
};

export const parentSchema = yup.object().shape({
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
  category: yup.string().required("Are you a parent?"),
  civil: yup.string().required("choose your civil status"),
  job: yup.string().required("would you mention your job please"),
  familyMembers: yup
    .number()
    .min(1)
    .required("number of your family member"),
  demandes: yup.string().required("Please mention your demandes"),
});

export const stateOptions = [
  { id: uuidv4(), value: "Tunis", label: "Tunis" },
  { id: uuidv4(), value: "Ariana", label: "Ariana" },
  { id: uuidv4(), value: "Ben Arous", label: "Ben Arous" },
  { id: uuidv4(), value: "Mannouba", label: "Mannouba" },
  { id: uuidv4(), value: "Bizert", label: "Bizert" },
  { id: uuidv4(), value: "Nabeul", label: "Nabeul" },
  { id: uuidv4(), value: "Beja", label: "Beja" },
  { id: uuidv4(), value: "Jendouba", label: "Jendouba" },
  { id: uuidv4(), value: "Zaghouan", label: "Zaghouan" },
  { id: uuidv4(), value: "Siliana", label: "Siliana" },
  { id: uuidv4(), value: "Le Kef", label: "Le Kef" },
  { id: uuidv4(), value: "Sousse", label: "Sousse" },
  { id: uuidv4(), value: "Monastir", label: "Monastir" },
  { id: uuidv4(), value: "Mahdia", label: "Mahdia" },
  { id: uuidv4(), value: "Kasserine", label: "Kasserine" },
  { id: uuidv4(), value: "Sidi Bouzid", label: "Sidi Bouzid" },
  { id: uuidv4(), value: "Kairouan", label: "Kairouan" },
  { id: uuidv4(), value: "Gafsa", label: "Gafsa" },
  { id: uuidv4(), value: "Safax", label: "Safax" },
  { id: uuidv4(), value: "Gabes", label: "Gabes" },
  { id: uuidv4(), value: "Medenine", label: "Medenine" },
  { id: uuidv4(), value: "Tozeur", label: "Tozeur" },
  { id: uuidv4(), value: "Guebili", label: "Guebili" },
  { id: uuidv4(), value: "Tataouine", label: "Tataouine" },
];

export const statusOptions = [
  { key: "Maried", value: "maried" },
  { key: "Divorced", value: "divorced" },
];
