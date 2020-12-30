import {
  ADD_FRIEND,
  GET_ALL_FRIENDS,
  GET_FRIEND,
  REMOVE_FRIEND,
} from "../types";

const initialState = {
  friends: [],
  newFriend: "",
};

const FriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return { ...state, friends: [...state.friends], newFriend: "" };
    case GET_ALL_FRIENDS:
      return { ...state, friends: action.payload };
    case GET_FRIEND:
      return { ...state, friends: action.payload };
    case REMOVE_FRIEND:
      return {
        ...state,
        friends: [...state.friends.filter((friend, index) => index !== action.payload)],
      };
    default:
      return { ...state };
  }
};

export default FriendReducer;
