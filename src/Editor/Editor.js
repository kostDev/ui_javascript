import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnControlled as ControlledEditor } from "react-codemirror2";
import { setCode } from "../Store/Actions";

function Editor({ mode }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const statusCode = useSelector((state) => state.statusCode);
  const template = useSelector((state) => state.template[mode]);
  const [tempCode, setTempCode] = useState(template);

  const saveCode = (editor, _, value) => {
    setTempCode(value);
  };
  const onFocus = (editor) => editor.setOption("styleActiveLine", true);
  const onBlur = (editor) => editor.setOption("styleActiveLine", false);

  useEffect(() => {
    if (statusCode === "run" || statusCode === "refresh") {
      dispatch(setCode(tempCode, mode));
    }
  }, [statusCode]);

  useEffect(() => {
    //console.log('save', mode);
    setTempCode(tempCode);
  }, [template]);

  return (
    <ControlledEditor
      className="h-100 w-100"
      value={template}
      autoCursor={false}
      options={{
        theme,
        height: "100%",
        tabSize: 2,
        mode,
        showCursorWhenSelecting: true,
        styleActiveLine: false,
        lineNumbers: true,
        indentWithTabs: true,
        // lineWrapping: true,
        keyMap: "sublime",
        matchBrackets: false,
        autoCloseTags: true,
        autoCloseBrackets: true,
      }}
      // onBeforeChange={saveCode}
      onChange={saveCode}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default memo(Editor);
