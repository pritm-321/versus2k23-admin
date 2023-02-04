import { GAME_LIST_FAIL, GAME_LIST_REQUEST, GAME_LIST_SUCCESS } from "../constants/gameConstants";



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