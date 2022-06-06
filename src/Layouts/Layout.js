import { useRef } from "react";

import LayoutFourColumns from "./LayoutFourColumns";
import useCodeProcess from "../utils/useCodeProcess";
import { useSelector } from "react-redux";
import LayoutJsOnly from "./LayoutJsOnly";

function Layout() {
  const frameRef = useRef(null);
  const layoutType = useSelector((state) => state.layoutType);
  layoutType && useCodeProcess(frameRef);

  switch (layoutType) {
    case "4-Columns":
      return <LayoutFourColumns frameRef={frameRef} />;
    case "JS-Only":
      return <LayoutJsOnly frameRef={frameRef} />;
    default:
      return null;
  }
}

export default Layout;
