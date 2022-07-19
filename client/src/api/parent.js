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

  const updatedParent = await axios.put(
    `http://localhost:5000/farah/parent/profil/${id}`,
    value,
    { headers: { authenticate: token, role: role } }
  );
};
