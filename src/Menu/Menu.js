import {useDispatch, useSelector} from "react-redux";
import { Container } from "react-bootstrap";
import AccordionMenu from "./AccordionMenu";
import CurrentTarget from "./CurrentTarget";
import { addItem } from "../Store/Actions";

function Menu() {
  const target = useSelector(state => state.currentTarget)
  const dispatch = useDispatch();
  const setCurrentTarget = (el) => dispatch(addItem(el));
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
