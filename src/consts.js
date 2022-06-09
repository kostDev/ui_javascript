import html, { htmlP5 } from "./templates/html";
import css, { cssP5 } from "./templates/css";
import javascript, { jsOnly, jsP5 } from "./templates/javascript";

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

export const LAYOUTS = ["4-Columns", "JS-Only", "p5"];
export const PROJECT_STRUCTURE = {
  name: "",
  theme: "",
  layoutType: "",
  template: {},
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
  p5: {
    htmlmixed: htmlP5,
    javascript: jsP5,
    css: cssP5,
  },
};
