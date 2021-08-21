import api from "./apiConfig";

export const login = async (admin) => {
  try {
    const res = await api.post("/admins/login", { admin: admin });
    const { token } = res.data;
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data;
  } catch {
    return false
  }
};

export const verify = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const res = await api.get("/admins/verify");
      return res.data;
    }
  } catch {
    return false
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  api.defaults.headers.common.authorization = null;
}

export const getHeidi = async () => {
  try {
    const res = await api.get(`/admins/1`)
    return res.data
  } catch {
    return false
  }
}