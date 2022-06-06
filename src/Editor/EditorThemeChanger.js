import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Store/Actions";
import { Dropdown } from "react-bootstrap";

function EditorThemeChanger() {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themes);
  const theme = useSelector((state) => state.theme);
  const updateTheme = (value) => dispatch(setTheme(value));
  //position-absolute top-0 end-0
  return (
    <Dropdown className="w-auto">
      <Dropdown.Toggle
        variant="outline-secondary"
        className="bg-none empty-focus border-0"
      >
        theme: {theme}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
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
