import { Col, Row } from "react-bootstrap";
import Editor from "../Editor/Editor";

import playIcon from "../icons/play.svg";
import stopIcon from "../icons/stop.svg";

import { useDispatch, useSelector } from "react-redux";
import { runCodeStatus, stopCodeStatus } from "../Store/Actions";

function LayoutJsOnly({ frameRef }) {
  const dispatch = useDispatch();
  const runCode = () => dispatch(runCodeStatus());
  const stopCode = () => dispatch(stopCodeStatus());
  const isRun = useSelector((state) => state.isCodeRun);

  return (
    <>
      <Row className="w-100 h-100 position-fixed">
        <Col className="position-relative bg-black h-100 p-0" md={5}>
          <div className="text-dark w-100 h-100" id="runDemo">
            <iframe
              ref={frameRef}
              id="codeFrame"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div
            className="d-flex position-absolute w-auto p-1 top-0 end-0 justify-content-end"
            id="runBtn"
          >
            <span className="mt-2 me-3" onClick={runCode}>
              <img alt="run code" width="24px" src={playIcon} />
            </span>
            {isRun && (
              <span className="mt-2 me-2" onClick={stopCode}>
                <img alt="stop code" width="24px" src={stopIcon} />
              </span>
            )}
          </div>
        </Col>
        <Col
          className="position-relative bg-dark h-100 p-0 border-dark border-top"
          md={7}
        >
          <Editor mode="javascript" />
        </Col>
      </Row>
    </>
  );
}

LayoutJsOnly.type = "4-Columns";

export default LayoutJsOnly;
