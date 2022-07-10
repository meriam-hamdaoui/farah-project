import { v4 as uuidv4 } from "uuid";
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//sign in form
export const SX_Styling = {
  backgroundImage: "url(/logo.png)",
  backgroundRepeat: "no-repeat",
  backgroundColor: "white",
  //(t) => t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "100%",
  backgroundPosition: "center",
  width: "300vh",
};

export const parentValues = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    category: "parent",
    agrement: "",
  },
  civil: "",
  job: "",
  familyMembers: "",
  demandes: "",
};

export const consultantValues = {
  user: {
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
    agrement: "",
  },
  gender: "Male",
  domain: "",
  educations: {
    degree: "",
    university: "",
    graduation: "",
  },

  offers: "",
};

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

export const childValues = {
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
