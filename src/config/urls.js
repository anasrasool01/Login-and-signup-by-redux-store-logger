export const API_BASE_URL = "http://192.168.1.87:9000";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/login/')
export const SIGNUP = getApiUrl('/register/');


export const ADDTODO = getApiUrl('/api/todo/');
export const FETCHTODO =  getApiUrl('/api/todo/');
export const DELETETODO = (`http://192.168.1.87:9000/api/delete_todo/${id}/`);
export const COMPLETETODO = (`http://192.168.1.87:9000/api/todo/${id}/`);
// export const UPDATETODO = (`http://192.168.1.87:9000/api/todo/${id}/`);
