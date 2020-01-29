import { SPHttpClient } from "@microsoft/sp-http";
export const types = {
  TOGGLE_ALERT: "toggle_alert",
  UPDATE_CURRENT_PATH: "update_current_path",
  SET_HTTP_CLIENT: "set_http_client"
};

export const toggleAlert = (isVisible: boolean) => {
  return {
    type: types.TOGGLE_ALERT,
    payload: isVisible
  };
};

export const updateCurrentPath = (path: string) => {
  return {
    type: types.UPDATE_CURRENT_PATH,
    payload: path
  };
};
export const setHttpClient = (httpClient: SPHttpClient) => {
  return {
    type: types.UPDATE_CURRENT_PATH,
    payload: httpClient
  };
};
