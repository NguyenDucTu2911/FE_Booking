import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  adminInfo: null,
  GENDER: [],
  TopDocTor: [],
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
    default:
      return state;
  }
};

export default adminReducer;
