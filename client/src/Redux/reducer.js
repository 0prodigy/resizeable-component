import * as types from "./actionTypes";

const initState = {
  loading: false,
  loadingMsg: "",
  content: "",
  err: "",
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
        loadingMsg: payload,
        content: "",
      };
    case types.ADD_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMsg: "",
        content: payload,
        err: "",
      };
    case types.ADD_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        loadingMsg: "",
        content: "",
        err: payload,
      };
    case types.UPDATE_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
        loadingMsg: payload,
        content: "",
      };
    case types.UPDATE_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMsg: "",
        content: payload,
        err: "",
      };
    case types.UPDATE_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        loadingMsg: "",
        content: "",
        err: payload,
      };
    case types.GET_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
        loadingMsg: payload,
        content: "",
      };
    case types.GET_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMsg: "",
        content: payload,
        err: "",
      };
    case types.GET_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        loadingMsg: "",
        content: "",
        err: payload,
      };
    default:
      return state;
  }
};

export default reducer;
