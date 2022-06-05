// import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
// import AccordionMenu from "./AccordionMenu";
// import { addItem } from "../Store/Actions";

function Menu() {
  // const dispatch = useDispatch();
  // const setCurrentTarget = (el) => dispatch(addItem(el));
  return (
    <Container className="bg-white rightBlock float-start w-25 vh-100 overflow-auto">
      <h2 className="text-center">Code Blocks</h2>
      {/*<AccordionMenu setElement={setCurrentTarget} />*/}
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
