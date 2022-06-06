import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Store/Actions";
import { Form } from "react-bootstrap";

function EditorThemeChanger() {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themes);
  const theme = useSelector((state) => state.theme);
  const updateTheme = ({ target }) => dispatch(setTheme(target.value));
  //position-absolute top-0 end-0
  return (
    <Form.Select
      className="w-auto p-1 bg-dark text-white opacity-50 border-0 empty-focus"
      aria-label="theme variable"
      defaultValue={theme}
      onChange={updateTheme}
    >
      {themes.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </Form.Select>
  );
}

export default memo(EditorThemeChanger);
