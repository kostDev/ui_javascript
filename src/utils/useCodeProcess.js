import { trackingConsole } from "../templates/javascript";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function useCodeProcess(iframeRef) {
  const templates = useSelector((state) => state.templates.default);
  const code = useSelector((state) => state.code);
  const statusCode = useSelector((state) => state.statusCode);
  const layoutType = useSelector((state) => state.layoutType);

  const runOnlyCode = () => {
    const iframe = iframeRef?.current;
    const doc = document.createElement("html");
    const consoleTrackScript = document.createElement("script");
    const script = document.createElement("script");
    doc.innerHTML = templates.htmlmixed;
    script.innerHTML = code.javascript;
    consoleTrackScript.innerHTML = trackingConsole;
    // body
    doc.children[1].appendChild(consoleTrackScript);
    doc.children[1].appendChild(script);
    iframe.srcdoc = doc.innerHTML;
  };

  const runCode = () => {
    const iframe = iframeRef?.current;
    const doc = document.createElement("html");
    const consoleTrackScript = document.createElement("script");
    const script = document.createElement("script");
    const styl = document.createElement("style");
    doc.innerHTML = code.htmlmixed;
    styl.innerHTML = code.css;
    script.innerHTML = code.javascript;
    consoleTrackScript.innerHTML = trackingConsole;
    // head
    doc.children[0].appendChild(styl);
    // body
    doc.children[1].appendChild(consoleTrackScript);
    doc.children[1].appendChild(script);
    iframe.srcdoc = doc.innerHTML;
  };

  const stopCode = () => {
    const iframe = iframeRef?.current;
    const consoleUI = document.getElementById('consoleUI');
    if (iframe) {
      iframe.srcdoc = "";
    }
    if(consoleUI) {
      consoleUI.innerHTML = null;
    }
    // if(iframe?.contentWindow) iframe.contentWindow.console.clear();
  };

  useEffect(() => {
    if (
      layoutType === "JS-Only" &&
      (statusCode === "run" || statusCode === "refresh")
    ) {
      runOnlyCode();
    } else if (statusCode === "run" || statusCode === "refresh") {
      runCode();
    } else if (statusCode === "stop") {
      stopCode();
    }
  }, [code, statusCode, layoutType]);
}

export default useCodeProcess;
