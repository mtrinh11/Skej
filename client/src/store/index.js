import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import UserReducer from './reducers/UserReducer'
import AuthReducer from './reducers/AuthReducer'
import EventReducer from './reducers/EventReducer'
import FriendReducer from './reducers/FriendReducer'
import RequestReducer from './reducers/RequestReducer'
import TodoReducer from './reducers/TodoReducer';

const store = createStore(
    combineReducers({
        userState: UserReducer,
        authState: AuthReducer,
        eventState: EventReducer,
    //     friendState: FriendReducer,
    //     requestState: RequestReducer,
    //     todoState: TodoReducer
    }),
    applyMiddleware(thunk)
)

export default store;