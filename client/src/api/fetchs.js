import axios from "axios";

export const fetchAds = async () => {
  const { data } = await axios.get(`http://localhost:5000/farah`);
  return data;
};

export const fetchParent = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    `http://localhost:5000/farah/parent/profil`,
    { headers: { authenticate: token } }
  );
  return data;
};

export const fetchConsultant = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/farah/consultant/profil"
  );
  return data;
};

export const fetchAdmin = async () => {
  const { data } = await axios.get("http://localhost:5000/farah/dashboard");
  return data;
};

//mapage
export const fetchChildren = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/farah/dashboard/children"
  );
  return data;
};

export const fetchAllParents = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/farah/dashboard/parents"
  );
  return data;
};

export const fetchAllConsultants = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/farah/dashboard/consultants"
  );
  return data;
};
