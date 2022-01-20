import signUpReducer from "./signUpReducer";
import CreateProjectReducer from "./CreateProjectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    signUpReducer,
    CreateProjectReducer
})
export default rootReducer;