import {combineReducers} from "redux";
import counter1Reducer from "./counter-one-reduser"
import counter2Reducer from "./counter-two-reduser"
import userReducer from "../redusers/users-reducer"

const reducer = combineReducers({
    counter1: counter1Reducer,
    counter2: counter2Reducer,
    userReducer
})

export default reducer