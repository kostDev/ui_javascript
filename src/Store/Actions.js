// EDITOR
export const EDITOR_SET_THEME = "EDITOR_SET_THEME";
export const EDITOR_SET_CODE = "EDITOR_SET_CODE";
export const EDITOR_RUN_CODE_STATUS = "EDITOR_RUN_CODE_STATUS";
export const EDITOR_STOP_CODE_STATUS = "EDITOR_STOP_CODE_STATUS";
export const EDITOR_REFRESH_CODE_STATUS = "EDITOR_REFRESH_CODE_STATUS";
export const EDITOR_SAVE_CODE_STATUS = "EDITOR_SAVE_CODE_STATUS";
// LAYOUT
export const LAYOUT_SET = "LAYOUT_SET";

// TARGET

//ACTIONS
export const setTheme = (theme) => ({
  type: EDITOR_SET_THEME,
  payload: { theme },
});

export const setCode = (code, mode) => ({
  type: EDITOR_SET_CODE,
  payload: { code, mode },
});

export const runCodeStatus = () => ({
  type: EDITOR_RUN_CODE_STATUS,
});

export const stopCodeStatus = () => ({
  type: EDITOR_STOP_CODE_STATUS,
});

export const refreshCodeStatus = () => ({
  type: EDITOR_REFRESH_CODE_STATUS,
});

export const saveCodeStatus = (isCodeRun = false) => ({
  type: EDITOR_SAVE_CODE_STATUS,
  payload: { isCodeRun },
});

export const setLayout = (layout) => ({
  type: LAYOUT_SET,
  payload: { layout },
});
