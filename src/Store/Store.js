import { configureStore } from "@reduxjs/toolkit";
import {
  ITEM_ADD_ACTION,
  SCREEN_ADD_ACTION,
  SCREEN_SET_CURRENT_INDEX,
} from "./Actions";

const InitialState = {
  currentScreen: 0,
  totalScreens: 1,
  maxScreens: 6,
  screensData: { 0: [] },
};

function Reducer(state = InitialState, { type, payload }) {
  switch (type) {
    case ITEM_ADD_ACTION:
      const id = state.currentScreen;
      const item = payload.item;
      console.log(state.screensData);
      return {
        ...state,
        screensData: {
          ...state.screensData,
          [id]: [...state.screensData[id], item],
        },
      };
    case SCREEN_ADD_ACTION:
      const totalScreens = state.totalScreens + 1;
      const nextId = totalScreens - 1;
      return {
        ...state,
        totalScreens,
        screensData: {
          ...state.screensData,
          [nextId]: [],
        },
      };
    case SCREEN_SET_CURRENT_INDEX:
      return { ...state, currentScreen: payload.index };
    default:
      return state;
  }
}

const Store = configureStore({ reducer: Reducer });

export default Store;
