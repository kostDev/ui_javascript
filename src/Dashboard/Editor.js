import { useDispatch, useSelector } from "react-redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { setCode } from "../Store/Actions";

import { useState } from "react";

function Editor({ theme, mode }) {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.templates[mode]);
  const [code, setTempCode] = useState(template);
  const saveCode = (editor, _, value) => {
    setTempCode(value);
  };

  return (
    theme && (
      <CodeMirror
        className="h-100 w-100"
        value={code}
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
          // keyMap: "sublime",
        }}
        onBeforeChange={saveCode}
        onChange={(editor, data, value) => {
          dispatch(setCode(value, mode));
        }}
      />
    )
  );
}

export default Editor;
