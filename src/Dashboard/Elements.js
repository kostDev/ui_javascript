import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function Elements() {
  const items = useSelector((state) => state.screensData[state.currentScreen]);

  console.log("items:", items);

  return (
    <div>
      {items?.length > 0 &&
        items.map((el, i) => (
          <Button key={el.name + "-" + i} className={el.uiClass}>
            {el.name}
          </Button>
        ))}
    </div>
  );
}

export default Elements;
