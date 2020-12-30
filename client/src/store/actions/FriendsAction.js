import {
    ADD_FRIEND,
    GET_FRIEND,
    GET_ALL_FRIENDS,
    REMOVE_FRIEND
} from "../types";
import {
    __AddFriend,
    __GetFriend,
    __GetAllFriends,
    __RemoveFriend
} from "../../services/FriendsServices";


export const addFriend = (userId, friendId) => async (dispatch)