import axios from "axios";

export const removeChildDB = async (id) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.delete(`http://localhost:5000/farah/dashboard/children/${id}`, {
    headers: { authenticate: token, role: role },
  });
};

export const removeUserDB = async (id) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.delete(`http://localhost:5000/farah/dashboard/users/${id}`, {
    headers: { authenticate: token, role: role },
  });
};

export const removeParentDB = async (id) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.delete(`http://localhost:5000/farah/dashboard/parents/${id}`, {
    headers: { authenticate: token, role: role },
  });
};

export const removeConsultantDB = async (id) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.delete(
    `http://localhost:5000/farah/dashboard/consultants/${id}`,
    {
      headers: { authenticate: token, role: role },
    }
  );
};

export const publierAd = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const annonces = await axios.post(
    "http://localhost:5000/farah/dashboard/ads/create",
    value,
    { headers: { authenticate: token, role: role } },
    config
  );

  return annonces;
};
