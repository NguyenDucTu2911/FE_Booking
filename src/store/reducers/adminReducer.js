import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  adminInfo: null,
  GENDER: [],
  TIME: [],
  TopDocTor: [],
  getAllDoctor: [],
  DetailDoctor: [],
  RequiredDoctor: [],
  booking: [],
  data: [],
  ListBooking: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        adminInfo: action.adminInfo,
      };
    case actionTypes.ADMIN_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        adminInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        adminInfo: null,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.GENDER = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      state.GENDER = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_DOCTOR_SUCCESS: {
      state.TopDocTor = action.datadoctor;
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DOCTOR_FAIL: {
      state.TopDocTor = [];
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_ALLDOCTOR_SUCCESS: {
      state.getAllDoctor = action.dataDoctor;

      return {
        ...state,
      };
    }
    case actionTypes.FETCH_ALLDOCTOR_FAIL: {
      state.getAllDoctor = [];
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_DOCTOR_SUCCESS: {
      state.DetailDoctor = action.dataDoctor;
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_DOCTOR_FAIL: {
      state.DetailDoctor = [];
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_AllCODE_SCHEDULE_SUCCESS: {
      state.TIME = action.data;
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_AllCODE_SCHEDULE_FAIL: {
      state.TIME = [];
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_Required_Doctor_Info_SUCCESS: {
      state.RequiredDoctor = action.data;
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_Required_Doctor_Info_FAIL: {
      state.RequiredDoctor = [];
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_Create_booking_Info_SUCCESS: {
      state.booking = action.data;
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_Create_booking_Info_FAIL: {
      state.booking = [];
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_verifyCreateBooking_SUCCESS: {
      state.data = action.data;
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_DETAIL_verifyCreateBooking_FAIL: {
      state.data = [];
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_ListBooking_SUCCESS: {
      state.ListBooking = action.data;
      return {
        ...state,
      };
    }
    case actionTypes.FETCH_ListBooking_FAIL: {
      state.data = [];
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
