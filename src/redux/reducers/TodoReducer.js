// import { ADD_TO_DO, DELETE_TO_DO, REMOVE_TO_DO } from "../types"
import ActionTypes from '../types';

const initialState = {
    list: [],
    loading: false,
    error: '',
    token : false,
};

const TodoReducers = (state = initialState, action) => {
    switch (action.type) {
        // case ActionTypes.ADD_TO_DO:
        //     const { id, data } = action.payload;
        //     return {
        //         ...state,
        //         list: [
        //             ...state.list,
        //             {
        //                 id,
        //                 data
        //             }
        //         ],
        //         loading: true,
        //         error: ''
        //     };


        // case ActionTypes.GET_TOKEN:
        // return {
        //     ...state,
        //     token:action.data,
            
        // }

        case ActionTypes.FETCH_TODO_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case ActionTypes.DELETE_TO_DO:
            return {
                ...state,
                list: action.payload,
                loading: false,
                list: newList,
            }

        case ActionTypes.UPDATE_TODO:

            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                data: action.data,
                loading: false,
                list: newList,
            }


        case ActionTypes.REMOVE_TO_DO:
            return {
                ...state,
                list: [],
                loading: false,
                error: action.error
            };

        default:
            return state;

    }
}
export default TodoReducers;





// // import { useState } from "react"

// const initialData = {
//     list: []
// }

// // const [list,setList]=useState([])

// const TodoReducers = (state = initialData, action) => {
//     switch (action.type) {
//         case "Add_To_Do":
//             const { id, data } = action.payload;
//             return {
//                 ...state,
//                 list: [
//                     ...state.list,
//                     {
//                         id: id,
//                         data: data
//                     }
//                 ]
//             }

//         case "Delete_To_Do":
//             const newList = state.list.filter((elem) => elem.id !== action.id)
//             return {
//                 ...state,
//                 list: newList,
//             }

//         case "Remove_To_Do":
//             return {
//                 ...state,
//                 list: [],
//             }

//         default : return  state

//     }
// }
// export default TodoReducers;


