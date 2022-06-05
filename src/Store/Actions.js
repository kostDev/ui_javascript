// EDITOR
export const EDITOR_SET_THEME = "EDITOR_SET_THEME";
export const EDITOR_SET_CODE = "EDITOR_SET_CODE";
// SCREEN

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
