import { useContext, useState } from "react";
import { DefaultContext } from "../Context";
import { Container, ButtonGroup, Button } from "react-bootstrap";

function CreateBottons(value) {
  const elements = [];
  for (let i = 1; i <= value; i++) {
    elements.push(<Button key={"screen-" + i}>{i}</Button>);
  }
  return elements;
}

function Dashboard() {
  const data = useContext(DefaultContext);
  console.log(data.items);
  const MAX_SCREENS = 8;
  const [totalScreens, setTotalScreens] = useState(1);
  const setTotal = () => {
    const value = totalScreens + 1;
    if (value <= MAX_SCREENS) setTotalScreens(value);
  };
  return (
    <Container className="dashboard vh-100 w-75">
      <ButtonGroup className="d-flex m-auto justify-center w-25">
        <Button className="btn-secondary" onClick={setTotal}>
          +
        </Button>
        {totalScreens && CreateBottons(totalScreens)}
        {/* <Button>2</Button>
        <Button>3</Button> */}
      </ButtonGroup>
      {data.items.length > 0 &&
        data.items.map((el, i) => (
          <Button key={el.name + "-" + i} className={el.uiClass}>
            {el.name}
          </Button>
        ))}
    </Container>
  );
}

export default Dashboard;
