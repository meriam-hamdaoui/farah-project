import axios from "axios";

export const postParent = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    `http://localhost:5000/farah/sign-up/parent`,
    { ...value },
    config
  );
  return response;
};

export const updateParentProfil = async (id, value) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  await axios.put(`http://localhost:5000/farah/parent/profil/${id}`, value, {
    headers: { authenticate: token, role: role },
  });
};

export const ajoutEnfant = async (value) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.post(
    "http://localhost:5000/farah/parent/profil/add-child",
    value,
    { headers: { authenticate: token, role: role } }
  );
};

export const modifierEnfant = async (id, value) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.put(
    `http://localhost:5000/farah/parent/profil/children/${id}`,
    value,
    { headers: { authenticate: token, role: role } }
  );
};
