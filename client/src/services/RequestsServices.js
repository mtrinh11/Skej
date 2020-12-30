import ApiClient from "./ApiServices";

export const __CreateRequest = async (userId, requestedId) => {
  try {
    const res = await ApiClient.post(`/request/${userId}/${requestedId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteRequest = async (userId, requestedId) => {
  try {
    const res = await ApiClient.delete(`/request/${userId}/${requestedId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
