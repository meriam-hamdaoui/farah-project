import axios from "axios";

export const fetchAds = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/farah`);
  return data;
};
