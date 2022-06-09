import { Col, Row } from "react-bootstrap";
import Editor from "../Editor/Editor";

import preScreenIcon from "../icons/prescreen.svg";

import { useSelector } from "react-redux";

function LayoutFourColumns({ frameRef }) {
  const isRun = useSelector((state) => state.isCodeRun);

  return (
    <>
      <Row className="vw-100 h-95 m-0">
        <Col
          className=" h-50 position-relative bg-dark p-0 border-dark border-end border-bottom"
          md={6}
        >
          <Editor mode="htmlmixed" />
        </Col>
        <Col className="h-50 position-relative bg-white p-0" md={6}>
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
        <Col className="h-50  bg-info p-0 border-dark border-end" md={6}>
          <Editor mode="css" />
        </Col>
        <Col
          className="h-50 position-relative bg-dark p-0 border-dark border-top"
          md={6}
        >
          <Editor mode="javascript" />
        </Col>
      </Row>
    </>
  );
}

LayoutFourColumns.type = "4-Columns";

export default LayoutFourColumns;
