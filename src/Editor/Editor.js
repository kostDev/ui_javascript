import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { setCode } from "../Store/Actions";

function Editor({ mode }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const statusCode = useSelector((state) => state.statusCode);
  const template = useSelector((state) => state.template[mode]);
  const [tempCode, setTempCode] = useState(template);

  const saveCode = (editor, _, value) => setTempCode(value);

  useEffect(() => {
    if (statusCode === "run" || statusCode === "refresh") {
      dispatch(setCode(tempCode, mode));
    }
  }, [statusCode]);

  return (
    <CodeMirror
      className="h-100 w-100"
      value={tempCode}
      options={{
        theme,
        tabSize: 2,
        indentUnit: 2,
        mode,
        height: "100%",
        autoCloseBrackets: true,
        showCursorWhenSelecting: true,
        styleActiveLine: true,
        smartIndent: true,
        lineNumbers: true,
        indentWithTabs: true,
        lineWrapping: true,
        keyMap: "sublime",
      }}
      onBeforeChange={saveCode}
      // onChange={saveCode}
    />
  );
}

export default memo(Editor);
