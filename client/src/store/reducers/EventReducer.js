import {
  CREATE_EVENT,
  GET_ALL_EVENTS,
  GET_EVENT,
  GET_EVENTS_BY_USER,
  GET_FRIEND_EVENTS,
  EDIT_EVENT,
  DELETE_EVENT,
} from "../types";

const initialState = {
  events: [],
  newEvent: "",
};

const EventReducer = (state = initialState, action) => {
<<<<<<< HEAD
    switch (action.type){
        default:
            return {...state}
    }
=======
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        newEvent: "",
      };
    case GET_ALL_EVENTS:
      return { ...state, events: action.payload };
    case GET_EVENT:
      return { ...state, events: action.payload };
    case GET_EVENTS_BY_USER:
      return { ...state };
    case GET_FRIEND_EVENTS:
      return { ...state };
    case EDIT_EVENT:
      return { ...state, newEvent: action.payload };
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((event, index) => index !== action.payload)],
      };
    default:
      return { ...state };
  }
>>>>>>> 6279f849671ea7a34bc264cab75aa0fbcd6c964c
};

export default EventReducer;
