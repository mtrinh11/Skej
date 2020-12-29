import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import UserReducer from './reducers/UserReducer'

const store = createStore(
    combineReducers({
        userState: UserReducer,

    }),
    applyMiddleware(thunk)
)

export default store;