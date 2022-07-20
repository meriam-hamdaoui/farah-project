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
  const role = localStorage.getItem("role");
  const { data } = await axios.get(
    "http://localhost:5000/farah/consultant/profil",
    {
      headers: { authenticate: token, role: role },
    }
  );

  return data;
};

export const fetchAdmin = async () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const { data } = await axios.get("http://localhost:5000/farah/dashboard", {
    headers: { authenticate: token, role: role },
  });
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
  return data;
};

//mapage dashboard
export const fetchChildren = async () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { data } = await axios.get(
    "http://localhost:5000/farah/dashboard/children",
    {
      headers: { authenticate: token, role: role },
    }
  );
  return data;
};

export const fetchAllParents = async () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const { data } = await axios.get(
    "http://localhost:5000/farah/dashboard/parents",
    {
      headers: { authenticate: token, role: role },
    }
  );
  return data;
};

export const fetchAllConsultants = async () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const { data } = await axios.get(
    "http://localhost:5000/farah/dashboard/consultants",
    {
      headers: { authenticate: token, role: role },
    }
  );
  return data;
};
