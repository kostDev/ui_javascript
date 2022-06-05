export const DEFAULT_ACTIVE_KEY_VARIABLE = "variable";

export const VariablesMenuList = [
  {
    value: 0,
    init: "let",
    name: "Number",
    type: "Number",
    input_type: "number",
    uiClass: "list-group-item-success",
    variant: "success",
  },
  {
    value: "text",
    init: "let",
    name: "String",
    type: "String",
    input_type: "text",
    uiClass: "list-group-item-warning",
    variant: "warning",
  },
  {
    value: false,
    init: "let",
    name: "Boolean",
    type: "Boolean",
    input_type: "number",
    uiClass: "list-group-item-primary",
    variant: "primary",
  },
];

export const ObjectsMenuList = [
  { name: "Function", uiClass: "list-group-item-primary", variant: "primary" },
  { name: "Array", uiClass: "list-group-item-success", variant: "success" },
  { name: "Object", uiClass: "list-group-item-warning", variant: "warning" },
  { name: "Class", uiClass: "list-group-item-info", variant: "info" },
];

export const DefaultTemplatesMenuList = [
  {
    name: "Arrow Function",
    uiClass: "list-group-item-primary",
    variant: "primary",
  },
  {
    name: "Anonymous Function",
    uiClass: "list-group-item-primary",
    variant: "primary",
  },
  { name: "Array", uiClass: "list-group-item-success", variant: "success" },
  { name: "Object", uiClass: "list-group-item-warning", variant: "warning" },
  { name: "Class", uiClass: "list-group-item-info", variant: "info" },
];

// ACCORDION SECTIONS

export const VariablesSection = {
  key: "variable",
  title: "Variable",
  subTitle: "Primitives",
  createNew: false,
  list: VariablesMenuList,
};

export const ObjectSection = {
  key: "object",
  title: "Object",
  subTitle: "References",
  createNew: false,
  list: ObjectsMenuList,
};

export const TemplatesSection = {
  key: "templates",
  title: "Templates",
  subTitle: "*",
  createNew: true,
  list: DefaultTemplatesMenuList,
};

export default { VariablesMenuList, ObjectsMenuList };
