import axios from "axios";

export const fetchProfil = async () => {
  const { data } = await axios.get(
    `${process.env.API_PATH}/farah/parent/profil`
  );
  return data;
};

export const postParent = async (value) => {
  try {
    await axios.post(`${process.env.API_PATH}/farah/sign-up/parent`, {
      ...value,
    });
  } catch (error) {
    console.error(`postParent => ${error}`);
  }
};
