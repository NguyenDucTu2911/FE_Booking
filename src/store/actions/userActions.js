import actionTypes from "./actionTypes";
import {
  headlegetAllcode,
  TopDoctorHome,
  AllDoctor,
  saveDetailDoctorAction,
  detailDoctor,
  hendlecreateBooking,
  verifyCreateBooking,
  listBooking,
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

export const fetchSchedule = () => {
  return async (dispatch, getstate) => {
    try {
      let res = await headlegetAllcode("TIME");
      console.log("checkress", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_DETAIL_AllCODE_SCHEDULE_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_DETAIL_AllCODE_SCHEDULE_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_DETAIL_AllCODE_SCHEDULE_FAIL,
      });
      console.log(error);
    }
  };
};

export const fetchRequiredDoctorInfo = () => {
  return async (dispatch, getstate) => {
    try {
      let resPrice = await headlegetAllcode("PRICE");
      let resPAYMENT = await headlegetAllcode("PAYMENT");
      let resPROVINCE = await headlegetAllcode("PROVINCE");
      if (
        resPrice.data &&
        resPrice.data.errCode === 0 &&
        resPAYMENT.data &&
        resPAYMENT.data.errCode === 0 &&
        resPROVINCE.data &&
        resPROVINCE.data.errCode === 0
      ) {
        let data = {
          Price: resPrice.data,
          Payment: resPAYMENT.data,
          Province: resPROVINCE.data,
        };
        dispatch({
          type: actionTypes.FETCH_DETAIL_Required_Doctor_Info_SUCCESS,
          data: data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_DETAIL_Required_Doctor_Info_FAIL,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_DETAIL_Required_Doctor_Info_FAIL,
      });
      console.log(e);
    }
  };
};

export const saveBooking = (data) => {
  return async (dispatch, getstate) => {
    try {
      let response = await hendlecreateBooking(data);
      if (response && response.errCode === 0) {
        toast.success("save success");
        dispatch({
          type: actionTypes.FETCH_DETAIL_Create_booking_Info_SUCCESS,
        });
      } else {
        toast.error("save error");
        dispatch({
          type: actionTypes.FETCH_DETAIL_Create_booking_Info_FAIL,
        });
      }
    } catch (error) {
      toast.error("save error");
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_DETAIL_Create_booking_Info_FAIL,
      });
    }
  };
};

export const verifyBooking = (token, doctorid) => {
  return async (dispatch, getstate) => {
    try {
      let response = await verifyCreateBooking(token, doctorid);
      console.log("check", response);
      if (response && response.errCode === 0) {
        toast.success("Xác Nhận Lịch Hẹn Thành Công");
        dispatch({
          type: actionTypes.FETCH_DETAIL_verifyCreateBooking_SUCCESS,
          data: response.data,
        });
      } else {
        toast.error("Lịch Hẹn Đã Đực Xác Nhận");
        dispatch({
          type: actionTypes.FETCH_DETAIL_verifyCreateBooking_FAIL,
        });
      }
    } catch (error) {
      toast.error("save error");
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_DETAIL_verifyCreateBooking_FAIL,
      });
    }
  };
};

export const ListBooking = (date, doctorid) => {
  return async (dispatch, getstate) => {
    try {
      let response = await listBooking(date, doctorid);
      if (response && response.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ListBooking_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ListBooking_FAIL,
        });
      }
    } catch (error) {
      toast.error("save error");
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_ListBooking_FAIL,
      });
    }
  };
};
