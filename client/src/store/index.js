import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux'

const store = createStore(
    combineReducers({}),
    applyMiddleware(thunk)
)

export default store;