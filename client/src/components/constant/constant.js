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

export const divStyle = {
  position: "relative",
  width: "100%",
  height: 0,
  paddingTop: "56.2500%",
  paddingBottom: "48px",
  boxShadow: "0 2px 8px rgba(63,69,81,0.16)",
  marginTop: "1.6em",
  marginBottom: "0.9em",
  overFlow: "hidden",
  borderRadius: "8px",
  wilChange: "transform",
};
export const iframStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  border: "none",
  padding: 0,
  margin: 0,
};

export const SX_Contact = {
  backgroundImage: "url(/logo.png)",
  backgroundRepeat: "no-repeat",
  backgroundColor: "white",
  //(t) => t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "100%",
  backgroundPosition: "center",
  width: "300vh",
};

export const bureauTab = [
  {
    key: uuidv4(),
    name: "Manouba",
    maps: "404 Not Found",
  },
  {
    key: uuidv4(),
    name: "Bizert",
    maps:
      "https://www.google.tn/maps/place/Association+farah+bizerte/@37.2174966,10.1180706,17z/data=!4m12!1m6!3m5!1s0x12e2e9895a4d41b7:0xb9ba8fa00de7e467!2sAssociation+farah+bizerte!8m2!3d37.2174923!4d10.1202593!3m4!1s0x12e2e9895a4d41b7:0xb9ba8fa00de7e467!8m2!3d37.2174923!4d10.1202593?hl=en",
  },
  {
    key: uuidv4(),
    name: "Nabeul",
    maps: "404 Not Found",
  },
  {
    key: uuidv4(),
    name: "El-Jam",
    maps: "404 Not Found",
  },
  {
    key: uuidv4(),
    name: "Gabes",
    maps: "404 Not Found",
  },
];
