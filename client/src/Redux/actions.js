import * as types from "./actionTypes";
import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:5000/api/content",
  headers: {
    "content-type": "application/json",
  },
});

const addContentRequest = (payload) => ({
  type: types.ADD_CONTENT_REQUEST,
  payload,
});
const addContentSucess = (payload) => ({
  type: types.ADD_CONTENT_SUCCESS,
  payload,
});
const addContentFailure = (payload) => ({
  type: types.ADD_CONTENT_FAILURE,
  payload,
});

const getContentRequest = (payload) => ({
  type: types.GET_CONTENT_REQUEST,
  payload,
});
const getContentSucess = (payload) => ({
  type: types.GET_CONTENT_SUCCESS,
  payload,
});
const getContentFailure = (payload) => ({
  type: types.GET_CONTENT_FAILURE,
  payload,
});

const updateContentRequest = (payload) => ({
  type: types.UPDATE_CONTENT_REQUEST,
  payload,
});
const updateContentSucess = (payload) => ({
  type: types.UPDATE_CONTENT_SUCCESS,
  payload,
});
const updateContentFailure = (payload) => ({
  type: types.UPDATE_CONTENT_FAILURE,
  payload,
});

export const addContent = (text) => async (dispatch) => {
  dispatch(addContentRequest("Hold up adding your content"));
  try {
    const data = await req.post("/add", { text }).then((res) => res.data);
    if (data.err) {
      dispatch(addContentFailure(data.message));
    } else {
      dispatch(addContentSucess(data.content));
    }
  } catch (err) {
    dispatch(addContentFailure("Something went wrong in adding your conent"));
  }
};

export const updateContent = ({ text, id }) => async (dispatch) => {
  dispatch(updateContentRequest("Hold up updateing your content"));
  try {
    const data = await req
      .post("/update", { text, id })
      .then((res) => res.data);
    if (data.err) {
      dispatch(updateContentFailure(data.message));
    } else {
      dispatch(updateContentSucess(data.content));
    }
  } catch (err) {
    dispatch(
      updateContentFailure("Something went wrong in adding your conent")
    );
  }
};

export const getContent = () => async (dispatch) => {
  dispatch(getContentRequest("Hold up geting your content"));
  try {
    const data = await req.get("/").then((res) => res.data);
    if (data.err) {
      dispatch(getContentFailure(data.message));
    } else {
      dispatch(getContentSucess(data.content));
    }
  } catch (err) {
    dispatch(getContentFailure("Something went wrong in adding your conent"));
  }
};
