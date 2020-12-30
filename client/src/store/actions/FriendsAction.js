import {
  ADD_FRIEND,
  GET_ALL_FRIENDS,
  GET_FRIEND,
  REMOVE_FRIEND,
} from "../types";
import {
  __AddFriend,
  __GetAllFriends,
  __GetFriend,
  __RemoveFriend,
} from "../../services/FriendsServices";

export const addFriend = (userId, friendId) => async (dispatch) => {
  try {
    let res = await __AddFriend(userId, friendId);
    dispatch({
      type: ADD_FRIEND,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllFriends = (id) => async (dispatch) => {
  try {
    let res = await __GetAllFriends(id);
    dispatch({
      type: GET_ALL_FRIENDS,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const getFriend = (id) => async (dispatch) => {
  try {
    let res = await __GetFriend(id);
    dispatch({
      type: GET_FRIEND,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const removeFriend = (userId, friendId) => async (dispatch) => {
  try {
    let res = await __RemoveFriend(userId, friendId);
    dispatch({
      type: REMOVE_FRIEND,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};
