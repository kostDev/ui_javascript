import { useEffect } from "react";
import { Container } from "react-bootstrap";

import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed";
// import "codemirror/mode/htmlembedded/htmlembedded";
import "codemirror/keymap/sublime";
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

import Layout from "./Layouts/Layout";
import EditorThemeChanger from "./Editor/EditorThemeChanger";
import LayoutChanger from "./Layouts/LayoutChanger";

import "./utils/prittyObject";

const receiveConsole = ({ data }) => {
  const { args, type } = data;
  if (type && args) {
    const consoleUi = document.getElementById("consoleUI");
    if (consoleUi) {
      const div = document.createElement("div");
      div.innerHTML = `<pre>${args.prettyPrint()}</pre>`;
      div.innerHTML += `<br/><span class="position-absolute bg-secondary w-100 end-0 p-2 text-white">${new Date().toLocaleTimeString()}</span>`;
      div.classList.add(
        "alert",
        "alert-dark",
        "text-error",
        "border-top",
        "border-dark",
        "position-relative"
      );
      consoleUi.prepend(div);
      // console.log('here', args, type)
    }
  }
};

export default function App() {
  useEffect(() => {
    window.addEventListener("message", receiveConsole, false);
  }, [window]);

  return (
    <Container className="App vh-100" fluid>
      <header className="row justify-content-between p-1 bg-dark text-white border-bottom border-secondary">
        <LayoutChanger />
        <EditorThemeChanger />
      </header>
      {/*<Menu />*/}
      <Layout />
    </Container>
  );
}
