import { useDispatch, useSelector } from "react-redux";
import { setLayout } from "../Store/Actions";
import { Dropdown } from "react-bootstrap";

function LayoutChanger() {
  const dispatch = useDispatch();
  const layouts = useSelector((state) => state.layouts);
  const layoutType = useSelector((state) => state.layoutType);
  const updateLayout = (layout) => dispatch(setLayout(layout));
  return (
    <>
      <Dropdown className="w-50">
        <Dropdown.Toggle
          variant="outline-secondary"
          className="w-100 empty-focus text-center"
        >
          {layoutType}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark" align="end">
          {layouts.map((layout) => (
            <Dropdown.Item
              key={"layout-" + layout}
              active={layout === layoutType}
              onClick={() => updateLayout(layout)}
            >
              {layout}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default LayoutChanger;
