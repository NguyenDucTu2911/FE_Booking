import actionTypes from "./actionTypes";
import { headlegetAllcode, TopDoctorHome } from "../../services/userService";

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
