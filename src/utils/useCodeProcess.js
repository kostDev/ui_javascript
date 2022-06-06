import { trackingConsole } from "../templates/javascript";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function useCodeProcess(iframeRef) {
  const code = useSelector((state) => state.code);
  const statusCode = useSelector((state) => state.statusCode);

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
    iframe.srcdoc = "";
    // if(iframe?.contentWindow) iframe.contentWindow.console.clear();
  };

  useEffect(() => {
    if (statusCode === "run" || statusCode === "refresh") {
      runCode();
    } else if (statusCode === "stop") {
      stopCode();
    }
  }, [code, statusCode]);
}

export default useCodeProcess;
