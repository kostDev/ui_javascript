import { useState } from "react";
import { useSelector } from "react-redux";

import Editor from "../Editor/Editor";
import Split from "react-split";

import preScreenIcon from "../icons/prescreen.svg";

function LayoutP5({ frameRef }) {
  const isRun = useSelector((state) => state.isCodeRun);
  const [isHtml, setBottomHtml] = useState(true);

  const switchUI = (status) => {
    setBottomHtml(status);
  }

  return (
    <>
      <Split
        className="d-flex flex-row vw-100 h-95 m-0 p-0 overflow-hidden"
        sizes={[50, 50]}
        minSize={250}
        gutterSize={5}
        snapOffset={1}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="position-relative h-100 bg-secondary">
          <div className="w-100 h-100" id="runDemo">
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
        </div>
        <Split
          className="position-relative h-100 bg-dark"
          sizes={[55, 45]}
          minSize={150}
          gutterSize={5}
          snapOffset={1}
          dragInterval={1}
          direction="vertical"
          cursor="row-resize"
        >
          <div className="position-relative">
            <Editor mode="javascript" />
          </div>
          <div className="position-relative bg-dark p-0">
            <Editor mode={isHtml ? "htmlmixed" : "css"} />
            <div className="position-absolute p-1 top-0 end-0">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  className={
                    "btn btn-outline-secondary empty-focus " +
                    (isHtml && "active")
                  }
                  onClick={() => switchUI(true)}
                >
                  html
                </button>
                <button
                  className={
                    "btn btn-outline-secondary empty-focus " +
                    (!isHtml && "active")
                  }
                  onClick={() => switchUI(false)}
                >
                  css
                </button>
              </div>
            </div>
          </div>
        </Split>
      </Split>
    </>
  );
}

LayoutP5.type = "p5";

export default LayoutP5;
