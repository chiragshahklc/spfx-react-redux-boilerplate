export const types = {
  TOGGLE_ALERT: "toggle_alert"
};

export const toggleAlert = (isVisible: boolean) => {
  return {
    type: types.TOGGLE_ALERT,
    payload: isVisible
  };
};
