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
