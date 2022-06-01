// ITEMS
export const ITEM_ADD_ACTION = "ITEM_ADD_ACTION";
// SCREEN
export const SCREEN_ADD_ACTION = "SCREEN_ADD_ACTION";
export const SCREEN_SET_CURRENT_INDEX = "SCREEN_SET_CURRENT_INDEX";

export const addItem = (item) => ({
  type: ITEM_ADD_ACTION,
  payload: { item },
});

export const addScreen = () => ({
  type: SCREEN_ADD_ACTION,
});

export const setCurrentScreen = (index) => ({
  type: SCREEN_SET_CURRENT_INDEX,
  payload: { index },
});
