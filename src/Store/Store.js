import { configureStore } from "@reduxjs/toolkit";
import produce from "immer";

import { EDITOR_SET_THEME, EDITOR_SET_CODE } from "./Actions";
import html from "../templates/html";
import css from "../templates/css";
import javascript from "../templates/javascript";

const templates = {
  htmlmixed: html,
  css,
  javascript,
};

const InitialState = {
  themes: [
    "dracula",
    "seti",
    "material-darker",
    "material-ocean",
    "panda-syntax",
    "mbo",
    "neo",
    "mdn-like",
  ],
  theme: "material-darker",
  code: { ...templates },
  templates,
};

const rootReducer = produce((draftState = InitialState, { type, payload }) => {
  switch (type) {
    case EDITOR_SET_THEME:
      draftState.theme = payload.theme;
      return draftState;
    case EDITOR_SET_CODE:
      const { code, mode } = payload;
      draftState.code[mode] = code;
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
});

export default Store;
