import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Store/Actions";

function EditorThemeChanger({ theme }) {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themes);
  const updateTheme = ({ target }) => dispatch(setTheme(target.value));

  return (
    <Form.Select
      className="position-absolute top-0 end-0 w-25 bg-dark text-white opacity-50"
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

export default EditorThemeChanger;
