import { useDispatch } from "react-redux";
import { LOGIN, SIGNUP } from "../../config/urls";
import { apiPost, clearUserData, setUserData } from "../../utils/utils";
import store from "../store";
import types from "../types";

export const saveUserData = (data) => {
  const { dispatch } = useDispatch();
  dispatch({
    type: types.LOGIN,
    payload: data
  })
}

export async function login(data) {
  console.log({ data })
  //   debugger
  return new Promise((resolve, reject) => {
    return apiPost(LOGIN, data).then((res) => {
      if (res.data) {
        setUserData(res.data).then(() => {
          resolve(res)
          saveUserData(res.data)
        });
        return
      }
      resolve(res)
    }).catch((error) => {
      reject(error)
      // message.toast(error)
    })
  })

}

export async function signup(data) {
  return apiPost(SIGNUP, data)
}

export async function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE })
  clearUserData()
}


