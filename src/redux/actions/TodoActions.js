import axios from 'axios';
import ActionTypes from '../types';
// import { ADDTODO, COMPLETETODO, DELETETODO, FETCHTODO } from '../../config/urls';
// import { API_BASE_URL } from '../config/urls';

export function addTodo(user) {
  let userData = AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    // for token 
    console.log(userData.accessToken, 'header')
  }
  return async (dispatch) => {
    const response = await axios.post('http://192.168.1.87:9000/api/todo/', user, {
      token,
      headers: {
        Authorization: `Bearer ${userData.accessToken}`,
      },
      // headers: {
      //     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1ODY5Nzc2LCJpYXQiOjE2NzU3ODMzNzYsImp0aSI6IjM3MTdjNzhhODQ3NTRkMTlhZjM2NzM2YmEwMmI3ZjE4IiwidXNlcl9pZCI6M30.6RtjIP0WwHNy5GmNapeLPCrHpIeYxhhFVuIksqMC6Bk"
      // }
    })
    console.log(response.data)
    dispatch(fetchTodos())
  }
}
export const fetchTodos = () => {
  let userData = AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    // for token 
    console.log(userData.accessToken, 'header')
  }
  return async (dispatch) => {
    const response = await axios.get('http://192.168.1.87:9000/api/todo/', {
      // headers: {
      //   Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1ODY5Nzc2LCJpYXQiOjE2NzU3ODMzNzYsImp0aSI6IjM3MTdjNzhhODQ3NTRkMTlhZjM2NzM2YmEwMmI3ZjE4IiwidXNlcl9pZCI6M30.6RtjIP0WwHNy5GmNapeLPCrHpIeYxhhFVuIksqMC6Bk"
      // }
      headers: {
        Authorization: `Bearer ${userData.accessToken}`,
      },
    })
    console.log(response.data)
    dispatch({
      type: ActionTypes.FETCH_TODO_SUCCESS,
      payload: response.data
    })
  }
}


export function DeleteTodo(id) {
  let userData = AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    // for token 
    console.log(userData.accessToken, 'header')
  }
  return async (dispatch) => {
    const response = await axios.delete
      (`http://192.168.1.87:9000/api/delete_todo/${id}/`,
        {
          // headers: {
          //   Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1ODY5Nzc2LCJpYXQiOjE2NzU3ODMzNzYsImp0aSI6IjM3MTdjNzhhODQ3NTRkMTlhZjM2NzM2YmEwMmI3ZjE4IiwidXNlcl9pZCI6M30.6RtjIP0WwHNy5GmNapeLPCrHpIeYxhhFVuIksqMC6Bk"
          // }
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        })
    dispatch({
      type: ActionTypes.DELETE_TO_DO,
      payload: response.data,
    })
    dispatch(fetchTodos())

  }
}

export function CompleteTodo(user, id) {
  let userData = AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    // for token 
    console.log(userData.accessToken, 'header')
  }
  return async (dispatch) => {
    const response = await axios.post(`http://192.168.1.87:9000/api/todo/${id}/`, user, id,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1ODY5Nzc2LCJpYXQiOjE2NzU3ODMzNzYsImp0aSI6IjM3MTdjNzhhODQ3NTRkMTlhZjM2NzM2YmEwMmI3ZjE4IiwidXNlcl9pZCI6M30.6RtjIP0WwHNy5GmNapeLPCrHpIeYxhhFVuIksqMC6Bk"
        }
        // headers: {
        //   Authorization: `Bearer ${userData.accessToken}`,
        // },
      })
    console.log(response.data)
    dispatch({
      type: ActionTypes.UPDATE_TODO,
      // payload: response.data.false,
      payload: { complete },
      // status: "Completed",
    })
  }
}

export const RemoveTodo = () => {
  return {
    type: ActionTypes.REMOVE_TO_DO,
  }
}


// export async function CompleteTodo (user,id) {
// let userData = await AsyncStorage.getItem('userData');
// if (userData) {
//   userData = JSON.parse(userData);
//   // for token 
//   console.log(userData.accessToken, 'header')
//     try {
//       const response = await axios.patch(`http://192.168.1.87:9000/api/todo/${id}/`, { completed: true }, {
// headers: {
//   Authorization: `Bearer ${userData.accessToken}`,
// },
//       }).then(response => {
//         return response.data.todo;
//       });
//     } catch (e) {
//       console.error('Failed to complete todo', e);
//       return null;
//     }
//   };
// }