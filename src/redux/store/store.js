import { createStore , combineReducers , applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from '../reducers/userReducer';

const rootreducer = combineReducers({
    userList : userReducer,
})

const initialState = {}

export const store = createStore(rootreducer,initialState,composeWithDevTools(applyMiddleware(thunk)))