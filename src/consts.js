import html from "./templates/html";
import css from "./templates/css";
import javascript, { jsOnly } from "./templates/javascript";

export const THEMES = [
  "dracula",
  "seti",
  "material-darker",
  "material-ocean",
  "panda-syntax",
  "mbo",
  "neo",
  "mdn-like",
];

export const LAYOUTS = ["4-Columns", "JS-Only"];
export const NEW_LAYOUTS = {
  "4-Columns": {
    type: "4-Columns",
    theme: "",
    project: {
      template: {},
      files: {},
    },
  },
  "JS-Only": {
    type: "JS-Only",
    theme: "",
    project: {
      template: {},
      files: {},
    },
  },
};
export const PROJECT_STRUCTURE = {
  theme: "",
  layoutType: "",
  files: {},
  code: {},
};

export const TEMPLATES = {
  default: {
    htmlmixed: html,
    css,
    javascript,
  },
  "4-Columns": {
    htmlmixed: html,
    css,
    javascript,
  },
  "JS-Only": {
    htmlmixed: html,
    javascript: jsOnly,
  },
};
