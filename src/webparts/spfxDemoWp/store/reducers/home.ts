import { types } from "../actions/home";
import { Reducer } from "redux";
import { SPHttpClient } from "@microsoft/sp-http";
export interface IState {
  alert: boolean;
  currentPath: string;
  httpClient: SPHttpClient;
}
const initialState: IState = {
  alert: false,
  currentPath: "",
  httpClient: null
};

const homeReducer: Reducer<IState> = (state: IState = initialState, action) => {
  let newState = (<any>Object).assign({}, state) as IState;
  switch (action.type) {
    case types.TOGGLE_ALERT:
      {
        newState.alert = action.payload;
        return newState;
      }
      break;
    case types.UPDATE_CURRENT_PATH:
      {
        newState.currentPath = action.payload;
        return newState;
      }
      break;
    case types.SET_HTTP_CLIENT:
      {
        newState.httpClient = action.payload;
        return newState;
      }
      break;
    default:
      return state as any;
  }
};
export default homeReducer;
