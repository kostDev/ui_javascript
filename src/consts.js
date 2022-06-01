import VariableSettings from "./settings/VariableSettings";

export const DEFAULT_ACTIVE_KEY_VARIABLE = "variable";

export const VariablesMenuList = [
  {
    name: "Number",
    uiClass: "list-group-item-success",
    settings: VariableSettings.Number
  },
  {
    name: "String",
    uiClass: "list-group-item-warning",
    settings: VariableSettings.String
  },
  {
    name: "Boolean",
    uiClass: "list-group-item-primary",
    settings: VariableSettings.Boolean
  },
  {
    name: "Null",
    uiClass: "list-group-item-secondary",
    settings: VariableSettings.Null
  },
  {
    name: "Undefined",
    uiClass: "list-group-item-secondary",
    settings: VariableSettings.Undefined
  }
];

export const ObjectsMenuList = [
  { name: "Function", uiClass: "list-group-item-primary" },
  { name: "Array", uiClass: "list-group-item-success" },
  { name: "Object", uiClass: "list-group-item-warning" },
  { name: "Class", uiClass: "list-group-item-info" }
];

export const DefaultTemplatesMenuList = [
  { name: "Arrow Function", uiClass: "list-group-item-primary" },
  { name: "Anonymous Function", uiClass: "list-group-item-primary" },
  { name: "Array", uiClass: "list-group-item-success" },
  { name: "Object", uiClass: "list-group-item-warning" },
  { name: "Class", uiClass: "list-group-item-info" }
];

// ACCORDION SECTIONS

export const VariablesSection = {
  key: "variable",
  title: "Variable",
  subTitle: "Primitives",
  createNew: false,
  list: VariablesMenuList
};

export const ObjectSection = {
  key: "object",
  title: "Object",
  subTitle: "References",
  createNew: false,
  list: ObjectsMenuList
};

export const TemplatesSection = {
  key: "templates",
  title: "Templates",
  subTitle: "*",
  createNew: true,
  list: DefaultTemplatesMenuList
};

export default { VariablesMenuList, ObjectsMenuList };
