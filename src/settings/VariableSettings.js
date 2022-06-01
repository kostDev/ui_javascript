const TemplateFunction = (init, name, value) => `${init} ${name} = ${value};`;

export const Number_Settings = {
  v_type: Number,
  input: true,
  input_type: "number",
  init: ["const", "let"],
  templateFunction: TemplateFunction,
};
export const String_Settings = {
  v_type: String,
  input: true,
  input_type: "text",
  init: ["const", "let"],
  templateFunction: TemplateFunction,
};
export const Boolean_Settings = {
  v_type: Boolean,
  input: false,
  init: ["const", "let"],
  templateFunction: TemplateFunction,
};
export const Null_Settings = {
  v_type: null,
  input: false,
  input_type: false,
  init: ["let"],
  templateFunction: (name) => TemplateFunction("let", name, "null"),
};
export const Undefined_Settings = {
  v_type: undefined,
  input: false,
  input_type: false,
  init: ["let"],
  templateFunction: (name) => TemplateFunction("let", name, "undefined"),
};

export default {
  Number: Number_Settings,
  String: String_Settings,
  Boolean: Boolean_Settings,
  Null: Null_Settings,
  Undefined: Undefined_Settings,
};
