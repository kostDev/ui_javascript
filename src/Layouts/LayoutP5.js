import { Col, Row } from "react-bootstrap";
import Editor from "../Editor/Editor";

import preScreenIcon from "../icons/prescreen.svg";
// import undrawIcon from "../icons/undraw.svg";
import playIcon from "../icons/play.svg";
import stopIcon from "../icons/stop.svg";

import { useDispatch, useSelector } from "react-redux";
import { runCodeStatus, stopCodeStatus } from "../Store/Actions";
import { useState } from "react";

function LayoutP5({ frameRef }) {
  const dispatch = useDispatch();
  const runCode = () => dispatch(runCodeStatus());
  const stopCode = () => dispatch(stopCodeStatus());
  const isRun = useSelector((state) => state.isCodeRun);
  const [isBottomHtml, setBottomHtml] = useState(true);

  return (
    <>
      <Row className="vw-100 h-95 overflow-hidden">
        <Col
          className=" h-100 position-relative bg-dark p-0 border-dark border-end border-bottom"
          md={6}
        >
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
        <Col
          className="h-50 position-relative bg-white p-0 align-self-start"
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
          <Col
            className="h-100 w-100 position-relative bg-dark p-0 border-dark border-top col-auto"
            md={6}
          >
            <Editor mode={isBottomHtml ? "htmlmixed" : "css"} />
            <div className="position-absolute p-1 top-0 end-0">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  className={
                    "btn btn-outline-secondary empty-focus " +
                    (isBottomHtml && "active")
                  }
                  onClick={() => setBottomHtml(true)}
                >
                  html
                </button>
                <button
                  className={
                    "btn btn-outline-secondary empty-focus " +
                    (!isBottomHtml && "active")
                  }
                  onClick={() => setBottomHtml(false)}
                >
                  css
                </button>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  );
}

LayoutP5.type = "p5";

export default LayoutP5;
