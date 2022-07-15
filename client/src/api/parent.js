import axios from "axios";

export const fetchProfil = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/farah/parent/profil`
  );
  return data;
};

export const postParent = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/farah/sign-up/parent`,
    { ...value },
    config
  );
  return response;
};
