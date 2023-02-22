import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from "./reducers/index"
import logger from 'redux-logger'

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(RootReducer, composeEnhancers(applyMiddleware(...middlewares)));


