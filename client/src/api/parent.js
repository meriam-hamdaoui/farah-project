import axios from "axios";

export const fetchProfil = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/farah/parent/profil`
  );
  return data;
};

export const postParent = async (value) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/farah/sign-up/parent`, {
      ...value,
    });
  } catch (error) {
    console.error(`postParent => ${error}`);
  }
};
