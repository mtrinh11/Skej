import { CREATE_REQUEST, DELETE_REQUEST } from "../types";

const initialState = {
  requests: [],
  newRequest: "",
};

const RequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return { ...state, requests: [...state.requests], newRequest: "" };
    case DELETE_REQUEST:
      return {...state, requests: [...state.requests.filter((request, index) => index !== action.payload)]};
    default:
      return { ...state };
  }
};

export default RequestReducer;
