import axios from "axios";

export const fetchProfil = async () => {
  const { data } = await axios.get(
    `${process.env.API_PATH}/farah/parent/profil`
  );
  return data;
};
