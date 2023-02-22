// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import store from '../redux/store';
// import types from '../redux/types';
// import { GetToken } from '../redux/actions/TodoActions';

// const { dispatch, getState } = store;

 
// export async function GetTodos() {
// 	let userData = await AsyncStorage.getItem('userData');
// 	if (userData) {
// 		userData = JSON.parse(userData);
// 		// for token 
// 		console.log(userData.accessToken, 'header')
//         // GetToken(userData.accessToken);

// 		return {
// 			authorization: `Bearer ${userData.access_token}`,
// 		};
// 	}
// 	return {};
// }

// export async function apiReq(
// 	endPoint,
// 	data,
// 	method,
// 	headers,
// 	requestOptions = {}
// ) {

// 	return new Promise(async (res, rej) => {
// 		const getTokenHeader = await GetTodos();
// 		headers = {
// 			...getTokenHeader,
// 			...headers
// 		};

// 		if (method === 'get' || method === 'delete') {
// 			data = {
// 				...requestOptions,
// 				...data,
// 				headers
// 			};
// 		}
// 		console.log('method',endPoint)
// 		axios[method](endPoint, data, { headers })
// 			.then(result => {

// 				const { data } = result;

// 				if (data.status === false) {
// 					return rej(data);
// 				}
// 				return res(data);
// 			})
// 			.catch(error => {
// 				console.log(error)
// 				console.log(error && error.response, 'the error respne')
// 				if (error && error.response && error.response.status === 401) {
// 					clearUserData();
// 					dispatch({
// 						type: types.CLEAR_REDUX_STATE,
// 						payload: {}
// 					});
// 					dispatch({
// 						type: types.NO_INTERNET,
// 						payload: { internetConnection: true },
// 					});


// 				}
// 				if (error && error.response && error.response.data) {
// 					if (!error.response.data.message) {
// 						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
// 					}
// 					return rej(error.response.data)
// 				} else {
// 					return rej({ message: "Network Error", msg: "Network Error" });
// 				}
// 				return rej(error);
// 			});
// 	});
// }

// export function apiPost(endPoint, data, headers = {}) {
// 	return apiReq(endPoint, data, 'post', headers);
// }

// export function apiDelete(endPoint, data, headers = {}) {
// 	return apiReq(endPoint, data, 'delete', headers);
// }

// export function apiGet(endPoint, data, headers = {}, requestOptions) {
// 	return apiReq(endPoint, data, 'get', headers, requestOptions);
// }

// export function apiPut(endPoint, data, headers = {}) {
// 	return apiReq(endPoint, data, 'put', headers);
// }

// export function setItem(key, data) {
// 	data = JSON.stringify(data);
// 	return AsyncStorage.setItem(key, data);
// }

// export function getItem(key) {
// 	return new Promise((resolve, reject) => {
// 		AsyncStorage.getItem(key).then(data => {
// 			resolve(JSON.parse(data));
// 		});
// 	});
// }

// export function removeItem(key) {
// 	return AsyncStorage.removeItem(key);
// }

// export function clearAsyncStorate(key) {
// 	return AsyncStorage.clear();
// }

// export async function setUserData(data) {
// 	data = JSON.stringify(data);
// 	return await AsyncStorage.setItem('userData', data);
// }

// export async function getUserData() {
// 	return new Promise((resolve, reject) => {
// 		AsyncStorage.getItem('userData').then(data => {
// 			resolve(JSON.parse(data));
// 		});
// 	});
// }
// export async function clearUserData() {
// 	return AsyncStorage.removeItem('userData');
// }



// main fun 
// export const CompleteTodo = async () => {
// let userData = await AsyncStorage.getItem('userData');
// if (userData) {
//   userData = JSON.parse(userData);
//   // for token 
//   console.log(userData.accessToken, 'header')
//     try {
//       const response = await axios.patch(COMPLETETODO, { completed: true }, {
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











// export const addTodo = (data) => {
//   return {
//     type: ActionTypes.ADD_TO_DO,
//     payload: {
//       id: new Date().getTime().toString(),
//       data: data,
//     }
//   }
// }





// export const DeleteTodo = (id) => {
//   return {
//     type: ActionTypes.DELETE_TO_DO,
//     id
//   }





























// // import axios from 'axios';
// // import { API_BASE_URL } from '../config/urls';

// // const getTodos = async (Token) => {
// //   try {
// //     const response = await axios.get(API_BASE_URL, {
// //       headers: {
// //         Authorization: `Bearer ${Token}`,
// //       },
// //     });
// //     return response.data.todos;
// //   } catch (e) {
// //     console.error('Failed to retrieve todos', e);
// //     return [];
// //   }
// // };




// // const addTodo = async (accessToken, user) => {
// //   try {
// //     const response = await axios.post('http://192.168.1.87:9000/api/todo/', user, {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     });
// //     console.log(response.data)
// //         dispatch(fetchTodos())
// //     // return response.data.todo;
// //   } catch (e) {
// //     console.error('Failed to add todo', e);
// //     return null;
// //   }
// // };


// // const fetchTodos = async (accessToken) => {
// //   try {
// //     const response = await axios.get('http://192.168.1.87:9000/api/todo/', {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     });
// //     console.log(response.data)
// //     dispatch({
// //         type: ActionTypes.FETCH_TODO_SUCCESS,
// //         payload: response.data
// //     })
// //     // return response.data.todos;
// //   } catch (e) {
// //     console.error('Failed to fetch todos', e);
// //     return [];
// //   }
// // };


// // const deleteTodo = async (accessToken, id) => {
// //   try {
// //     await axios.delete(`http://192.168.1.87:9000/api/delete_todo/${id}/`, {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     });
// //     dispatch({
// //         type: ActionTypes.DELETE_TO_DO,
// //         payload: response.data,
// //     })
// //     dispatch(fetchTodos())
// //     // return true;
// //   } catch (e) {
// //     console.error('Failed to delete todo', e);
// //     return false;
// //   }
// // };

// // const completeTodo = async (accessToken, id) => {
// //   try {
// //     const response = await axios.patch(`http://192.168.1.87:9000/api/todo/${id}/`, { completed: true }, {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     });
// //     return response.data.todo;
// //   } catch (e) {
// //     console.error('Failed to complete todo', e);
// //     return null;
// //   }
// // };

// // // const updateTodo = async (accessToken, id, text) => {
// // //   try {
// // //     const response = await axios.patch(`http://192.168.1.87:9000/api/todo/${id}/`, { text }, {
// // //       headers: {
// // //         Authorization: `Bearer ${accessToken}`,
// // //       },
// // //     });
// // //     return response.data.todo;
// // //   } catch (e) {
// // //     console.error('Failed to update todo', e);
// // //     return null;
// // //   }
// // // };



// export const GetToken = (data) => {
//   return {
//       type: ActionTypes.GET_TOKEN,
//       data
//   }
// }

// const updateTodo = async (accessToken, id, text) => {
//   try {
//     const response = await axios.patch(`http://192.168.1.87:9000/api/todo/${id}/`, { text }, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     return response.data.todo;
//   } catch (e) {
//     console.error('Failed to update todo', e);
//     return null;
//   }
// };





// export const GetTodos = async (Token) => {
//   try {
//     const response = await axios.get(API_BASE_URL, {
//       headers: {
//         Authorization: `Bearer ${Token}`,
//       },
//     });
//     return response.data.todos;
//   }
//  catch (e) {
//     console.error('Failed to retrieve todos', e);
//     return [];
//   }
// };

// export const addTodo = async (user) => {
//   let userData = await AsyncStorage.getItem('userData');
//   if (userData) {
//     userData = JSON.parse(userData);
//     // for token 
//     console.log(userData.accessToken, 'header')
//   try {
//     const response = await axios.post(ADDTODO, user, {
//       headers: {
//         Authorization: `Bearer ${userData.accessToken}`,
//       },
//     },).then(response => {
//       console.log(response.data)
//       dispatch(fetchTodos())
//     });
//     // return response.data.todo;
//   } catch (e) {
//     console.error('Failed to add todo', e);
//     return null;
//   }
// };

// export const fetchTodos = async () => {
//   let userData = await AsyncStorage.getItem('userData');
//   if (userData) {
//     userData = JSON.parse(userData);
//     // for token 
//     console.log(userData.accessToken, 'header')
//   try {
//     const response = await axios.get(FETCHTODO, {
//       headers: {
//         Authorization: `Bearer ${userData.accessToken}`,
//     }.then(response => {
//       dispatch({
//         type: ActionTypes.FETCH_TODO_SUCCESS,
//         payload: response.data
//       })
//     // console.log(response.data)
//     // return response.data.todos;
//   } catch (e) {
//     console.error('Failed to fetch todos', e);
//     return [];
//   }
// };


// export const DeleteTodo = async () => {
//   let userData = await AsyncStorage.getItem('userData');
//   if (userData) {
//     userData = JSON.parse(userData);
//     // for token 
//     console.log(userData.accessToken, 'header')
//   try {
//     await axios.delete(DELETETODO, {
//       headers: {
//         Authorization: `Bearer ${userData.accessToken}`,
//       },
//     },).then(response => {
//       dispatch({
//         type: ActionTypes.DELETE_TO_DO,
//         payload: response.data,
//       })
//       dispatch(fetchTodos())
//     });

//     // return true;
//   } catch (e) {
//     console.error('Failed to delete todo', e);
//     return false;
//   }
// };



/////////////////////////////////////////////////////////////////
// export const CompleteTodo = async () => {
// let userData = await AsyncStorage.getItem('userData');
// if (userData) {
//   userData = JSON.parse(userData);
//   // for token 
//   console.log(userData.accessToken, 'header')
//     try {
//       const response = await axios.patch(COMPLETETODO, { completed: true }, {
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
////////////////////////////////////////////////////////////////////////////////