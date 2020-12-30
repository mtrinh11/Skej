import ApiClient from "./ApiServices";

export const __AddFriend = async (userId, friendId) => {
  try {
    const res = await ApiClient.post(`/friends/${userId}/${friendId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetAllFriends = async (id) => {
  try {
    const res = await ApiClient.get(`/friends/${id}/friends`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetFriend = async (id) => {
  try {
    const res = await ApiClient.get(`/friends/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __RemoveFriend = async (userId, friendId) => {
  try {
    const res = await ApiClient.delete(`/friends/${userId}/${friendId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
