import {GET_USER, LOGOUT_USER} from '../types'
import {__LoginUser, __CheckSession, __CreateUser} from '../../services/UserServices'

export const getUser = (formData) => async(dispatch) =>{
    try {
        let res = await __LoginUser(formData)
        dispatch({
            type: GET_USER,
            payload: res
        })
    } catch (error) {
        throw error
    }
}

export const signupUser = (formData) => async(dispatch) => {
    try {
        let res = await __CreateUser(formData)
        dispatch({
            type: GET_USER,
            payload: res
        })
    } catch (error) {
        throw error
    }
}

export const logoutUser = () => ({
    type: LOGOUT_USER,
    payload: {}
})