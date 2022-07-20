import axios from "axios";

export const removeChildDB = async (id) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  await axios.delete(`http://localhost:5000/farah/dashboard/children/${id}`, {
    headers: { authenticate: token, role: role },
  });
};
