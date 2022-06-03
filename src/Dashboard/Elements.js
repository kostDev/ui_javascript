import {Alert, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addTarget} from "../Store/Actions";

function Elements() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.screensData[state.currentScreen]);
  const setCurrentTarget = (el) => {
    dispatch(addTarget(el))
    console.log(el)
  }
  // console.log("items:", items);

  return (
    <Container className="overflow-auto">
      {items?.length > 0 &&
        items.map((el, i) => (
          <Alert
            key={el.name + "-" + i}
            className={'d-flex position-relative w-25 c-pointer border-5'}
            variant={el.variant}
            onClick={() => setCurrentTarget(el)}
          >
            <span className="position-absolute fixed-bottom text-end p-1 fs-10">ID: {el.id}</span>
            <span className="text-center text-center">{el.name}</span>

          </Alert>
        ))}
    </Container>
  );
}

export default Elements;
