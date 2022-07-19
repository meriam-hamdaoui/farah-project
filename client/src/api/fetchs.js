import axios from "axios";

export const fetchAds = async () => {
  const { data } = await axios.get(`http://localhost:5000/farah`);
  return data;
};

export const fetchParent = async () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { data } = await axios.get(
    `http://localhost:5000/farah/parent/profil`,
    { headers: { authenticate: token, role: role } }
  );
  return data;
};

export const fetchConsultant = async () => {
  const token = localStorage.getItem("token");
<<<<<<< HEAD
  const {
    data,
  } = await axios.get("http://localhost:5000/farah/consultant/profil", {
    headers: { authenticate: token },
  });
=======
  const { data } = await axios.get(
    "http://localhost:5000/farah/consultant/profil",
    {
      headers: { authenticate: token },
    }
  );
>>>>>>> privateRoute
  return data;
};

export const fetchAdmin = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get("http://localhost:5000/farah/dashboard", {
    headers: { authenticate: token },
  });
<<<<<<< HEAD
=======
  return data;
};

export const fetchChildrenByParent = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    "http://localhost:5000/farah/parent/profil/children",
    {
      headers: { authenticate: token },
    }
  );
>>>>>>> privateRoute
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
