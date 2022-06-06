import { useRef } from "react";

import LayoutFourColumns from "./LayoutFourColumns";
import useCodeProcess from "../utils/useCodeProcess";
import { useSelector } from "react-redux";

function Layout() {
  const frameRef = useRef(null);
  const layoutType = useSelector((state) => state.layoutType);
  layoutType && useCodeProcess(frameRef);

  switch (layoutType) {
    case "4-columns":
      return <LayoutFourColumns frameRef={frameRef} />;
    default:
      return null;
  }
}

export default Layout;
