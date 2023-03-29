import actionTypes from "./actionTypes";
import {
  headlegetAllcode,
  TopDoctorHome,
  AllDoctor,
  saveDetailDoctorAction,
  detailDoctor,
} from "../../services/userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});

export const userLoginSuccess = (userInfo) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  userInfo: userInfo,
});

export const userLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});

export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});

export const fetchGender = () => {
  return async (dispatch, getstate) => {
    try {
      let res = await headlegetAllcode("GENDER");
      console.log("checkress", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_GENDER_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_GENDER_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_GENDER_FAIL,
      });
      console.log(error);
    }
  };
};

export const loadDoctor = () => {
  return async (dispatch, getstate) => {
    try {
      let response = await TopDoctorHome(5);
      if (response && response.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_DOCTOR_SUCCESS,
          datadoctor: response.doctor,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_DOCTOR_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_DOCTOR_FAIL,
      });
      console.log(error);
    }
  };
};

export const ALLDocTor = () => {
  return async (dispatch, getstate) => {
    let response = await AllDoctor();

    try {
      if (response && response.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALLDOCTOR_SUCCESS,
          dataDoctor: response.Doctor,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALLDOCTOR_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ALLDOCTOR_FAIL,
      });
      console.log(error);
    }
  };
};

export const saveDetailDoctor = (data) => {
  return async (dispatch, getstate) => {
    try {
      let response = await saveDetailDoctorAction(data);
      if (response && response.errCode === 0) {
        toast.success("save success");
        dispatch({
          type: actionTypes.FETCH_SAVEDETAI_DOCTOR_SUCCESS,
        });
      } else {
        toast.error("save error");
        dispatch({
          type: actionTypes.FETCH_SAVEDETAI_DOCTOR_FAIL,
        });
      }
    } catch (error) {
      toast.error("save error");
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_SAVEDETAI_DOCTOR_FAIL,
      });
    }
  };
};

export const detailDoctorAction = (data) => {
  return async (dispatch, getstate) => {
    try {
      let response = await detailDoctor(data);
      if (response && response.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_DETAIL_DOCTOR_SUCCESS,
          dataDoctor: response.Doctor,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_DETAIL_DOCTOR_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_DETAIL_DOCTOR_FAIL,
      });
      console.log(error);
    }
  };
};
