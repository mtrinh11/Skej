import {
    CREATE_EVENT, 
    GET_EVENT, 
    GET_EVENTS_BY_USER, 
    GET_FRIEND_EVENTS, 
    EDIT_EVENT, 
    DELETE_EVENT
} from "../types";
import {
    __CreateEvent, 
    __DeleteEvent, 
    __EditEvent, 
    __GetEventsByUser, 
    __GetEventsOfFriends,
    __GetOneEvent,
    __GetAllEvents
} from "../../services/EventServices";


export const createEvent = (formData) => async(dispatch) => {
    try {
        let res = await __CreateEvent(formData)
        dispatch({
            type: CREATE_EVENT,
            payload: res
        });
    }catch (error) {
        throw error;
    }
};

export const getEvent = (eventId) => async(dispatch) => {
    try{
        let res = await __GetOneEvent(eventId)
        dispatch({
            type: GET_EVENT,
            payload: res
        })
    }catch(error){
        throw error;
    }
}

export const getAllEvent = () => async(dispatch)=> {
    try{
        let res = await __GetAllEvents();
        dispatch({
            type: GET_ALL_EVENTS,
            payload: res
        });
    }catch(error){
        throw error;
    }
}

export const getEventsByUser = (userId) => async(dispatch)=> {
    try{
        let res = await __GetEventsByUser(userId);
        dispatch({
           type: GET_EVENTS_BY_USER,
            payload: res
        })
    }catch(error){
        throw error;
    }
}

export const getFriendEvents = (friendId) => async(dispatch)=> {
    try{
        let res = await __GetEventsOfFriends(friendId);
        dispatch({
            type: GET_FRIEND_EVENTS,
            payload: res
        });
    }catch(error){
        throw error;
    }
}

export const editEvent = (eventId, formData) => async(dispatch)=> {
    try{
        let res = await __EditEvent(eventId, formData);
        dispatch({
            type: EDIT_EVENT,
            payload: res
        })
    }catch(error){
        throw error;
    }
}

export const deleteEvent = (eventId) => async(dispatch)=> {
    try{
        let res = await __DeleteEvent(eventId);
        dispatch({
            type: DELETE_EVENT,
            payload: res
        })
    }catch(error){
        throw error;
    }
}