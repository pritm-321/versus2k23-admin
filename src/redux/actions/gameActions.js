import axios from "axios";
import { GAME_LIST_FAIL, GAME_LIST_REQUEST, GAME_LIST_SUCCESS, PAYMENT_UPDATE_REQUEST, PAYMENT_UPDATE_SUCCESS } from "../constants/gameConstants";




export const getGameList = (game) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GAME_LIST_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        console.log(game);

        const { data } = await axios.post(
            "https://versus-event.herokuapp.com/api/v1/admin/bdb2edd1a123abf5f2be496aa5/getAllRegisteredGamesByGameName",{gameName:game} ,config
        );

        dispatch({
            type: GAME_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GAME_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}


export const updatePayment = (email, GameName) => async (dispatch, getState) => {
        try {
            dispatch({
                type: PAYMENT_UPDATE_REQUEST,
            });
            const {
                userLogin: { userInfo },
            } = getState();
    
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            const { data } = await axios.post(
                "https://versus-event.herokuapp.com/api/v1/admin/bdb2edd1a123abf5f2be496aa5/updatepaymentStatusByEmailAndGameName",{email : email , gameName : GameName} ,config
            );
            // console.log(data.message)
            dispatch({
                type: PAYMENT_UPDATE_SUCCESS,
                payload: data.message
            });
        } catch (error) {
            dispatch({
                type: GAME_LIST_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });


        }
    }



