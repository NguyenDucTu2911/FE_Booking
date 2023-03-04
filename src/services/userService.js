import axios from "../axios";

const hendleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const hendlegetUser = (id) => {
  return axios.get(`/api/User?id=${id}`);
};

export { hendleLoginApi, hendlegetUser };
