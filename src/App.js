import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed";
// import "codemirror/mode/htmlembedded/htmlembedded";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/seti.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/theme/mbo.css";

import Editor from "./Dashboard/Editor";

import playIcon from "./icons/play.svg";
import stopIcon from "./icons/stop.svg";
import preScreenIcon from "./icons/prescreen.svg";
import EditorThemeChanger from "./Dashboard/EditorThemeChanger";

export default function App() {
  const frameRef = useRef();
  const [isRunStatus, setRunStatus] = useState(false);
  const code = useSelector((state) => state.code);
  const theme = useSelector((state) => state.theme);

  const runCode = () => {
    const { current } = frameRef;
    current.innerHTML = null;
    setRunStatus(true);
    const iframe = document.createElement("iframe");
    const doc = document.createElement("html");
    const script = document.createElement("script");
    const styl = document.createElement("style");
    doc.innerHTML = code.htmlmixed;
    styl.innerHTML = code.css;
    script.innerHTML = code.javascript;
    // script.async = true;
    iframe.width = "100%";
    iframe.height = "100%";
    //console.log(doc.children)
    // head
    doc.children[0].appendChild(styl);
    // body
    doc.children[1].appendChild(script);
    // iframe.contentWindow.document.body.appendChild(script);
    iframe.srcdoc = doc.innerHTML;
    current.appendChild(iframe);
  };

  const stopCode = () => {
    frameRef.current.innerHTML = null;
    setRunStatus(false);
  };

  return (
    <Container className="App vh-100" fluid>
      {/*<Menu />*/}
      {/*<Dashboard />*/}
      <Row className="vh-50 h-50">
        <Col
          className="position-relative bg-dark h-100 p-0 border-dark border-end border-bottom"
          md={6}
        >
          <Editor theme={theme} mode="htmlmixed" />
          <EditorThemeChanger theme={theme} />
        </Col>
        <Col className="position-relative bg-white h-100 p-0" md={6}>
          <div
            ref={frameRef}
            className="text-dark w-100 h-100"
            id="runDemo"
          ></div>
          {!isRunStatus && (
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
          <Editor theme={theme} mode="css" />
        </Col>
        <Col
          className="position-relative bg-dark h-100 p-0 border-dark border-top"
          md={6}
        >
          <Editor theme={theme} mode="javascript" />
          <div
            className="d-flex position-absolute top-0 end-0 justify-content-end"
            id="runBtn"
          >
            <button className=" btn btn-dark m-2" onClick={runCode}>
              <img alt="run code" width="24px" src={playIcon} />
            </button>
            {isRunStatus && (
              <button className="btn btn-dark m-2" onClick={stopCode}>
                <img alt="stop code" width="24px" src={stopIcon} />
              </button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
