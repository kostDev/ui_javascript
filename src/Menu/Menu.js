import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { DefaultContext } from "../Context";
import AccordionMenu from "./AccordionMenu";
import CurrentTarget from "./CurrentTarget";

function Menu() {
  const [target, setTarget] = useState({});
  const { items } = useContext(DefaultContext);
  const setCurrentTarget = (el) => {
    items.push(el);
    setTarget(el);
  };
  return (
    <Container className="bg-white rightBlock right w-25 vh-100 overflow-auto">
      <h2 className="text-center">UI Elements</h2>
      <AccordionMenu setElement={setCurrentTarget} />
      {target?.name && <CurrentTarget target={target} />}
      {/* <ul className="list-group">
        <li className="list-group-item accordion-item">Data</li>
        <li className="list-group-item list-group-item-primary">Data</li>
        <li className="list-group-item list-group-item-secondary">Data</li>
        <li className="list-group-item list-group-item-success">Data</li>
        <li className="list-group-item list-group-item-danger">Data</li>
        <li className="list-group-item list-group-item-warning">Data</li>
        <li className="list-group-item list-group-item-info">Data</li>
        <li className="list-group-item list-group-item-light">Data</li>
        <li className="list-group-item list-group-item-dark">Data</li>
      </ul> */}
    </Container>
  );
}

export default Menu;
