
import {GET_USER, LOGOUT_USER} from '../types'

const initialState = {
    userInfo: {},
    events: [],
    friends: []
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
            return {...state}
        case LOGOUT_USER:
            return {...state, userInfo: action.payload}
        default:
            return {...state}
    }
}

export default UserReducer;