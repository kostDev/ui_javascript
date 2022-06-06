import { Col, Row } from "react-bootstrap";
import Editor from "../Editor/Editor";

import preScreenIcon from "../icons/prescreen.svg";
import playIcon from "../icons/play.svg";
import stopIcon from "../icons/stop.svg";

import { useDispatch, useSelector } from "react-redux";
import { runCodeStatus, stopCodeStatus } from "../Store/Actions";

function LayoutFourColumns({ frameRef }) {
  const dispatch = useDispatch();
  const runCode = () => dispatch(runCodeStatus());
  const stopCode = () => dispatch(stopCodeStatus());
  const isRun = useSelector((state) => state.isCodeRun);

  return (
    <>
      <Row className="vh-50 h-50">
        <Col
          className="position-relative bg-dark h-100 p-0 border-dark border-end border-bottom"
          md={6}
        >
          <Editor mode="htmlmixed" />
        </Col>
        <Col className="position-relative bg-white h-100 p-0" md={6}>
          <div className="text-dark w-100 h-100" id="runDemo">
            <iframe
              ref={frameRef}
              id="codeFrame"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          {!isRun && (
            <img
              className="position-absolute top-0 opacity-25"
              alt="code demo place"
              width="100%"
              height="100%"
              src={preScreenIcon}
            />
          )}
        </Col>
      </Row>
      <Row className="vh-50 h-50">
        <Col className="bg-info h-100 p-0 border-dark border-end" md={6}>
          <Editor mode="css" />
        </Col>
        <Col
          className="position-relative bg-dark h-100 p-0 border-dark border-top"
          md={6}
        >
          <Editor mode="javascript" />
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
      </Row>
    </>
  );
}

export default LayoutFourColumns;
