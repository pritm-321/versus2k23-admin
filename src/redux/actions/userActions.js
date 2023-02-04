import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants";


export const login = (name, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log(name, password);

        const { data } = await axios.post(
            "https://versus-event.herokuapp.com/api/v1/admin/bdb2edd1a123abf5f2bd0373ce496aa5/loginAdmin",
            { name, password },
            config
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        sessionStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const logout = () => (dispatch) => {
    sessionStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
}