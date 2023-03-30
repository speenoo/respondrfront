import {combineReducers, createStore} from "redux";
import {currentUserReducer, initialCurrentUser} from "./redux_features/currentUser/currentUserSlice";



export let store = createStore(combineReducers({
    currentUser:currentUserReducer,
}),  {
    currentUser: initialCurrentUser
}
);

