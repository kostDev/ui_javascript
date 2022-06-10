import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Store/Actions";
import { Dropdown } from "react-bootstrap";

function EditorThemeChanger() {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themes);
  const theme = useSelector((state) => state.theme);
  const updateTheme = (value) => dispatch(setTheme(value));

  return (
    <Dropdown className="w-50 mb-3">
      <Dropdown.Toggle
        variant="outline-secondary"
        className="w-100 empty-focus text-center"
      >
        {theme}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark" align="end">
        {themes.map((themeName) => (
          <Dropdown.Item
            key={"theme-" + themeName}
            active={themeName === theme}
            onClick={() => updateTheme(themeName)}
          >
            {themeName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default memo(EditorThemeChanger);
