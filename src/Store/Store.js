import { configureStore } from "@reduxjs/toolkit";
import produce from "immer";

import {
  ITEM_ADD_ACTION,
  SCREEN_ADD_ACTION,
  SCREEN_SET_CURRENT_INDEX,
  TARGET_ADD_ACTION,
} from "./Actions";

const InitialState = {
  idCounter: 0,
  currentScreen: 0,
  totalScreens: 1,
  maxScreens: 6,
  screensData: { 0: [] },
  currentTarget: null
};

const reducer = produce((draftState = InitialState, { type, payload }) => {
  switch (type) {
    case TARGET_ADD_ACTION:
      draftState.currentTarget = null;
      draftState.currentTarget = payload.target;
      return draftState;
    case ITEM_ADD_ACTION:
      const id = draftState.currentScreen;
      draftState.idCounter +=1
      const item = { ...payload.item, id: draftState.idCounter };
      draftState.currentTarget = item;
      draftState.screensData[id].push(item);
      return draftState;
    case SCREEN_ADD_ACTION:
      const nextId = draftState.totalScreens;
      if(draftState.totalScreens+1 <= draftState.maxScreens) {
        draftState.totalScreens += 1;
        draftState.screensData[nextId] = [];
      }
      return draftState;
    case SCREEN_SET_CURRENT_INDEX:
      draftState.currentTarget = null;
      draftState.currentScreen = payload.index;
      return draftState;
    default:
      return draftState;
  }
});

const Store = configureStore({ reducer });

export default Store;
