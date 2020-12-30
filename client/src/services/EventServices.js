import ApiClient from "./ApiServices";

export const __CreateEvent = async (data) => {
  try {
    const res = await ApiClient.post(`/event/create`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetAllEvents = async () => {
  try {
    const res = await ApiClient.get("event/all");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetOneEvent = async (eventId) => {
  try {
    const res = await ApiClient.get(`/event/${eventId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetEventsByUser = async (userId) => {
  try {
    const res = await ApiClient.get(`/event/user/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetEventsOfFriends = async (friendId) => {
  try {
    const res = await ApiClient.get(`/event/friend/${friendId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __EditEvent = async (eventId) => {
  try {
    const res = await ApiClient.put(`/event/${eventId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteEvent = async (eventId) => {
  try {
    const res = await ApiClient.delete(`/event/${eventId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
