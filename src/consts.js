import html from "./templates/html";
import css from "./templates/css";
import javascript from "./templates/javascript";

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

export const LAYOUTS = ["4-Columns"];

export const TEMPLATES = {
  default: {
    htmlmixed: html,
    css,
    javascript,
  },
};
