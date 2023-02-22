import { combineReducers } from "redux";
// import types from "../types";
import auth from './auth';
import TodoReducers from "./TodoReducer";

const RootReducer = combineReducers({
    auth,
    TodoReducers,
})
export default RootReducer

// const RootReducer = (state, action) => {
//     if (action.type == types.CLEAR_REDUX_STATE) {
//         state = undefined
//     }
//     return appReducer(state, action)
// }