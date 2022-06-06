import { Alert, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTarget } from "../Store/Actions";

function Block({ element, setTarget, isActive }) {
  return (
    <Alert
      id={element.idElement}
      className={"d-flex position-absolut w-25 border-3 " + isActive(element)}
      variant={element.variant}
      onClick={() => setTarget(element)}
    >
      <span className="position-absolute fixed-top text-start p-1 fs-10">
        {element.init}
      </span>
      <span className="position-absolute fixed-bottom text-start p-1 fs-10">
        {element.value}
      </span>
      <span className="text-center m-auto fs-5">{element.name}</span>
    </Alert>
  );
}

function Elements() {
  const dispatch = useDispatch();
  const target = useSelector((state) => state?.currentTarget || null);
  const items = useSelector((state) => state.screensData[state.currentScreen]);

  const setCurrentTarget = (el) => dispatch(addTarget(el));
  const isActive = ({ id, variant }) =>
    id === target?.id ? "border-" + variant : "";

  return (
    <>
      <Container className="position-relative overflow-auto h-75">
        {items?.length > 0 &&
          items.map((el) => (
            <Block
              key={el.idElement}
              element={el}
              setTarget={setCurrentTarget}
              isActive={isActive}
            />
          ))}
      </Container>
    </>
  );
}

export default Elements;
