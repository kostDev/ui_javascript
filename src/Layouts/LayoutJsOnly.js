import { Col, Row } from "react-bootstrap";
import Editor from "../Editor/Editor";

function LayoutJsOnly({ frameRef }) {
  return (
    <>
      <Row className="w-100 h-100 m-0 position-fixed">
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
            className="position-absolute w-100 h-100 top-0 px-3 pt-3 pb-5 overflow-auto"
            id="consoleUI"
          ></div>
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
