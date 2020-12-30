import { CREATE_REQUEST, DELETE_REQUEST } from "../types";
import {
  __CreateRequest,
  __DeleteRequest,
} from "../../services/RequestsServices";

export const createRequest = (userId, requestedId) => async (dispatch) => {
  try {
    let res = await __CreateRequest(userId, requestedId);
    dispatch({
      type: CREATE_REQUEST,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteRequest = (userId, requestedId) => async (dispatch) => {
  try {
    let res = await __DeleteRequest(userId, requestedId);
    dispatch({
      type: DELETE_REQUEST,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};
