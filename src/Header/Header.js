import {Button, ButtonGroup} from "react-bootstrap";
import { runCodeStatus, stopCodeStatus } from "../Store/Actions";
import { useDispatch } from "react-redux";

import playIcon from "../icons/play.svg";
import stopIcon from "../icons/stop.svg";

import HeaderSettingsModal from "./HeaderSettingsModal";

function Header() {
  const dispatch = useDispatch();
  const runCode = () => dispatch(runCodeStatus());
  const stopCode = () => dispatch(stopCodeStatus());

  return (
    <header className="d-flex justify-content-between py-1 m-0 bg-b1 text-white border-bottom border-secondary">
      <HeaderSettingsModal />
      <div className="d-flex w-auto">
        {/*<span className="mt-2 me-3" onClick={() => console.log("save")}>*/}
        {/*  <img alt="save code" width="24px" src={saveIcon} />*/}
        {/*</span>*/}
        <ButtonGroup>
          <Button className={"empty-focus border-0"} variant={'none'} onClick={runCode}>
            <img alt="run code" width="24px" src={playIcon} />
          </Button>
          <Button className={"empty-focus border-0"} variant="none" onClick={stopCode}>
            <img alt="stop code" width="24px" src={stopIcon} />
          </Button>
        </ButtonGroup>
      </div>

    </header>
  );
}

export default Header;
