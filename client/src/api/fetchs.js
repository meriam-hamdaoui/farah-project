import axios from "axios";

export const fetchAds = async () => {
  const { data } = await axios.get(`http://localhost:5000/farah`);
  return data;
};

export const fetchParent = async () => {
  const { data } = await axios.get(`http://localhost:5000/farah/parent/profil`);
  return data;
};

export const fetchConsultant = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/farah/consultant/profil"
  );
  return data;
};
