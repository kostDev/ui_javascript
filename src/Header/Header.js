import LayoutChanger from "../Layouts/LayoutChanger";
import EditorThemeChanger from "../Editor/EditorThemeChanger";
import playIcon from "../icons/play.svg";
import stopIcon from "../icons/stop.svg";
import { runCodeStatus, stopCodeStatus } from "../Store/Actions";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const runCode = () => dispatch(runCodeStatus());
  const stopCode = () => dispatch(stopCodeStatus());
  const isRun = useSelector((state) => state.isCodeRun);

  return (
    <header className="d-flex justify-content-between py-1 m-0 bg-b1 text-white border-bottom border-secondary">
      <LayoutChanger />
      <div className="d-flex w-auto" id="runBtn">
        {/*<span className="mt-2 me-3" onClick={() => console.log("save")}>*/}
        {/*  <img alt="save code" width="24px" src={saveIcon} />*/}
        {/*</span>*/}
        <span className="m-1 ms-2 me-2" onClick={runCode}>
          <img alt="run code" width="24px" src={playIcon} />
        </span>
        {isRun && (
          <span className="m-1 ms-2 me-2" onClick={stopCode}>
            <img alt="stop code" width="24px" src={stopIcon} />
          </span>
        )}
      </div>
      <EditorThemeChanger />
    </header>
  );
}

export default Header;
