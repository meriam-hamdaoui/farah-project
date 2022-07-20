import axios from "axios";

export const postConsultant = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    `http://localhost:5000/farah/sign-up/consultant`,
    { ...value },
    config
  );
  return response;
};

export const updateConsultantProfil = async (id, value) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.put(
    `http://localhost:5000/farah/consultant/profil/${id}`,
    value,
    { headers: { authenticate: token, role: role } }
  );
};
