import { useDispatch } from "react-redux";
import { LOGIN, SIGNUP } from "../../config/urls";
import { apiGet } from "../../utils/utils";
import { apiPost, clearUserData, setUserData } from "../../utils/utilsTodo";
import store from "../store";
import types from "../types";

export const saveUserData = (data) => {
    const { dispatch } = useDispatch();
    dispatch({
        type: types.Add_To_Do,
        payload: data
    })
}

export async function login(data) {
    console.log({ data })
    return new Promise((resolve, reject) => {
        return apiPost("Add_To_Do", data).then((res) => {
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

export async function add(data) {
    return apiPost(Add_To_Do, data)
}


export async function deletetodo(data) {
    return apiGet(Delete_To_Do, data)
}

export async function remove() {
    dispatch({ type: types.Remove_To_Do })
    clearUserData()
}


