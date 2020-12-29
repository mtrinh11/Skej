
import {CHANGE_EMAIL_INPUT, 
    CHANGE_PASSWORD_INPUT, 
    CHANGE_NAME_INPUT,
    CHANGE_USERNAME_INPUT} from '../types'

const initialState = {
    inputPassword: '',
    inputEmail: '',
    inputName: '',
    inputUsername: ''
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_EMAIL_INPUT:
            return {...state, inputEmail: action.payload}
        case CHANGE_PASSWORD_INPUT:
            return {...state, inputPassword: action.payload}
        case CHANGE_NAME_INPUT:
            return {...state, inputName: action.payload}
        case CHANGE_USERNAME_INPUT:
            return {...state, inputUsername: action.payload}
        default:
            return {...state}
    }
}

export default AuthReducer;