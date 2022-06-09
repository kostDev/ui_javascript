import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnControlled as ControlledEditor } from "react-codemirror2";
import { setCode } from "../Store/Actions";

function Editor({ mode }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const statusCode = useSelector((state) => state.statusCode);
  const code = useSelector((state) => state.code[mode]);
  const [tempCode, setTempCode] = useState(code);

  const saveCode = (editor, _, newCode) => {
    setTempCode(newCode);
    dispatch(setCode(newCode, mode));
  };
  const onFocus = (editor) => editor.setOption("styleActiveLine", true);
  const onBlur = (editor) => editor.setOption("styleActiveLine", false);

  // useEffect(() => {
  //   if(statusCode === 'save' || statusCode === 'run') {
  //     dispatch(setCode(tempCode, mode));
  //   }
  // }, [statusCode]);

  // useEffect(() => {
  //   setTempCode(tempCode);
  // }, [template]);

  return (
    <ControlledEditor
      className="h-100 w-100"
      value={code}
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
