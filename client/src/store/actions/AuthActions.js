
import {CHANGE_EMAIL_INPUT, 
    CHANGE_PASSWORD_INPUT, 
    CHANGE_NAME_INPUT,
    CHANGE_USERNAME_INPUT} from '../types'

export const changeEmailInput = (email) => ({
    type: CHANGE_EMAIL_INPUT,
    payload: email,
})

export const changePasswordInput = (pass) => ({
    type: CHANGE_PASSWORD_INPUT,
    payload: pass
})

export const changeNameInput = (name) => ({
    type: CHANGE_NAME_INPUT,
    payload: name
})

export const changeUsernameInput = (username) => ({
    type: CHANGE_USERNAME_INPUT,
    payload: username
})