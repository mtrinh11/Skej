import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import UserReducer from './reducers/UserReducer'
import AuthReducer from './reducers/AuthReducer'

const store = createStore(
    combineReducers({
        userState: UserReducer,
        authState: AuthReducer
    }),
    applyMiddleware(thunk)
)

export default store;