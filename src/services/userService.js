import axios from "../axios";

const hendleLoginApi = (email, password) => {
  return axios.post("/api/login", {
    email,
    password,
  });
  // .then((response) => {
  //   if (response.data.accessToken) {
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //   }

  //   return response.data;
  // });
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

const saveSchedule = (data) => {
  return axios.post("/api/create-Schedule", data);
};

const getSchedule = (doctorid, date) => {
  return axios.get(`/api/get-schedule?doctorid=${doctorid}&date=${date}`);
};

const getExtraInfo = (doctorid) => {
  return axios.get(`/api/get-extraInfo?doctorid=${doctorid}`);
};

const getBooking = (doctorid) => {
  return axios.get(`/api/get-Booking?doctorid=${doctorid}`);
};

const hendlecreateBooking = (data) => {
  return axios.post("/api/create-book", data);
};

const verifyCreateBooking = (data) => {
  return axios.post("/api/verify_create-book", data);
};

const listBooking = (data) => {
  return axios.get(
    `/api/get-AllBooking?doctorid=${data.doctorid}&date=${data.date}`
  );
};

const sendRemedyPost = (data) => {
  return axios.post("/api/send-remedy", data);
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
  saveSchedule,
  getSchedule,
  getExtraInfo,
  getBooking,
  hendlecreateBooking,
  verifyCreateBooking,
  listBooking,
  sendRemedyPost,
};
