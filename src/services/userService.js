import axios from "../axios";

const hendleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export {
  hendleLoginApi,
}
