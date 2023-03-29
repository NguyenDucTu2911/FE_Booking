import axios from "../axios";

const hendleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const hendlegetUser = (id) => {
  return axios.get(`/api/User?id=${id}`);
};

const hendleDeletetUser = (id) => {
  return axios.delete("/api/DeleteUser", {
    data: {
      id: id,
    },
  });
};

const hendlecreateUser = (data) => {
  return axios.post("/api/CreateUser", data);
};

const hendleEditUser = (data) => {
  return axios.put("/api/UpdateUser", data);
};

const headlegetAllcode = (data) => {
  return axios.get(`/api/allcode?type=${data}`);
};

const TopDoctorHome = (limit) => {
  return axios.get(`/api/TopDoctorHome?limit=${limit}`);
};

const AllDoctor = () => {
  return axios.get("/api/AllDoctorHome");
};

const saveDetailDoctorAction = (data) => {
  return axios.post("/api/save-info-doctor", data);
};

const detailDoctor = (id) => {
  return axios.get(`/api/get-info-doctor?id=${id}`);
};

export {
  hendleLoginApi,
  hendlegetUser,
  hendleDeletetUser,
  hendlecreateUser,
  hendleEditUser,
  headlegetAllcode,
  TopDoctorHome,
  AllDoctor,
  saveDetailDoctorAction,
  detailDoctor,
};
