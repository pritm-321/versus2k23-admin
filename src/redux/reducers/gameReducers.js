import { GAME_LIST_FAIL, GAME_LIST_REQUEST, GAME_LIST_SUCCESS, PAYMENT_UPDATE_FAIL, PAYMENT_UPDATE_REQUEST, PAYMENT_UPDATE_SUCCESS } from "../constants/gameConstants";



export const gameListReducer = (state = { games: [] }, action) => {
    switch (action.type) {
        case GAME_LIST_REQUEST:
            return { loading: true };
        case GAME_LIST_SUCCESS:
            return { loading: false, games: action.payload };
        case GAME_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const paymentUpdateReducer = (state = {}, action) => {
        switch (action.type) {
            case PAYMENT_UPDATE_REQUEST:
                return { loading: true };
            case PAYMENT_UPDATE_SUCCESS:
                return { loading: false, success: true };
            case PAYMENT_UPDATE_FAIL:
                return { loading: false, error: action.payload };
            default:
                return state;
        }
    }