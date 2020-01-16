import { combineReducers } from "redux";
import Home from "./home";
const rootReducer = combineReducers({ Home });
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
