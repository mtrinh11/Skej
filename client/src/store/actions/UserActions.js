import {GET_USER, LOGOUT_USER} from '../types'
import {__LoginUser, __CheckSession} from '../../services/UserServices'

export const getUser = () => async(dispatch) =>{
    try {
        let res = await __LoginUser()
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