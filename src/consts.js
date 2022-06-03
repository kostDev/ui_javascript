// import VariableSettings from "./settings/VariableSettings";

export const DEFAULT_ACTIVE_KEY_VARIABLE = "variable";

export const VariablesMenuList = [
  {
    name: "Number",
    uiClass: "list-group-item-success",
    variant: 'success',
    // settings: VariableSettings.Number,
  },
  {
    name: "String",
    uiClass: "list-group-item-warning",
    variant: 'warning',
    // settings: VariableSettings.String,
  },
  {
    name: "Boolean",
    uiClass: "list-group-item-primary",
    variant: 'primary',
    // settings: VariableSettings.Boolean,
  },
  {
    name: "Null",
    uiClass: "list-group-item-secondary",
    variant: 'secondary',
    // settings: VariableSettings.Null,
  },
  {
    name: "Undefined",
    uiClass: "list-group-item-secondary",
    variant: 'secondary',
    // settings: VariableSettings.Undefined,
  },
];

export const ObjectsMenuList = [
  { name: "Function", uiClass: "list-group-item-primary", variant: 'primary', },
  { name: "Array", uiClass: "list-group-item-success", variant: 'success', },
  { name: "Object", uiClass: "list-group-item-warning", variant: 'warning', },
  { name: "Class", uiClass: "list-group-item-info", variant: 'info', },
];

export const DefaultTemplatesMenuList = [
  { name: "Arrow Function", uiClass: "list-group-item-primary", variant: 'primary',  },
  { name: "Anonymous Function", uiClass: "list-group-item-primary", variant: 'primary',  },
  { name: "Array", uiClass: "list-group-item-success", variant: 'success',  },
  { name: "Object", uiClass: "list-group-item-warning", variant: 'warning',  },
  { name: "Class", uiClass: "list-group-item-info", variant: 'info',  },
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
