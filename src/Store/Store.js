import { configureStore } from "@reduxjs/toolkit";
import produce from "immer";

import {
  EDITOR_SET_THEME,
  EDITOR_SET_CODE,
  EDITOR_RUN_CODE_STATUS,
  EDITOR_STOP_CODE_STATUS,
  EDITOR_REFRESH_CODE_STATUS,
  LAYOUT_SET,
} from "./Actions";

import { LAYOUTS, TEMPLATES, THEMES } from "../consts";

const InitialState = {
  themes: THEMES,
  theme: "material-darker",

  layouts: LAYOUTS,
  layoutType: "4-Columns",

  templates: TEMPLATES,
  template: { ...TEMPLATES.default },

  projects: {},
  project: {},

  code: {}, // ...TEMPLATES.default ,
  statusCode: "stop",
  isCodeRun: false,
};

const rootReducer = produce((draftState = InitialState, { type, payload }) => {
  switch (type) {
    case EDITOR_SET_THEME:
      localStorage.setItem("theme", payload.theme);
      draftState.theme = payload.theme;
      return draftState;
    case EDITOR_SET_CODE:
      const { code, mode } = payload;
      draftState.code[mode] = code;
      return draftState;
    case EDITOR_RUN_CODE_STATUS:
      draftState.isCodeRun = true;
      if (draftState.statusCode === "run") {
        draftState.statusCode = "refresh";
      } else {
        draftState.statusCode = "run";
      }
      return draftState;
    case EDITOR_REFRESH_CODE_STATUS:
      draftState.isCodeRun = true;
      draftState.statusCode = "refresh";
      return draftState;
    case EDITOR_STOP_CODE_STATUS:
      draftState.isCodeRun = false;
      draftState.statusCode = "stop";
      return draftState;
    case LAYOUT_SET:
      draftState.isCodeRun = false;
      draftState.statusCode = "stop";
      localStorage.setItem("layoutType", payload.layout);
      draftState.layoutType = payload.layout;
      return draftState;
    default:
      return draftState;
  }
});

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: {
    ...InitialState,
    theme: localStorage.getItem("theme") || InitialState.theme,
    layoutType: localStorage.getItem("layoutType") || InitialState.layoutType,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default Store;
