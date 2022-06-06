import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addScreen, setCurrentScreen } from "../Store/Actions";

function CreateButtons(totalScreens, currentScreen, setCurrentScreen) {
  const elements = [];
  for (let i = 0; i < totalScreens; i++) {
    const uiActive = i === currentScreen && "active";
    elements.push(
      <Button
        key={"screen-" + i}
        className={uiActive}
        onClick={() => setCurrentScreen(i)}
      >
        Screen {i + 1}
      </Button>
    );
  }
  return elements;
}

function TopPanel() {
  const dispatch = useDispatch();
  const { currentScreen, totalScreens } = useSelector((state) => ({
    currentScreen: state.currentScreen,
    totalScreens: state.totalScreens,
  }));
  // console.log(currentScreen, totalScreens);
  const addMore = () => dispatch(addScreen());
  const onClickScreenTab = (index) => dispatch(setCurrentScreen(index));

  return (
    <ButtonGroup className="d-flex m-auto justify-center w-25 mb-3">
      <Button className="btn-secondary" onClick={addMore}>
        +
      </Button>
      {totalScreens &&
        CreateButtons(totalScreens, currentScreen, onClickScreenTab)}
    </ButtonGroup>
  );
}

export default TopPanel;
