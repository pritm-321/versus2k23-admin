import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllUsersReducer, userLoginReducer } from "./reducers/userReducers";
import { gameListReducer } from "./reducers/gameReducers";




const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: getAllUsersReducer,
    gameList : gameListReducer,
})


const userInfofromStorage = sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfofromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;