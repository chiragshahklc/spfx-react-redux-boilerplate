import { types } from "../actions/home";
import { Reducer } from "redux";
export interface IState {
  alert: boolean;
}
const initialState: IState = {
  alert: false
};

const homeReducer: Reducer<IState> = (state: IState = initialState, action) => {
  let newState = (<any>Object).assign({}, state) as IState;
  switch (action.type) {
    case types.TOGGLE_ALERT: {
      newState.alert = action.payload;
      return newState;
    }
    default:
      return state as any;
  }
};
export default homeReducer;
