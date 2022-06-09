import { useEffect } from "react";
import { Container } from "react-bootstrap";

// import "codemirror/mode/htmlembedded/htmlembedded";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed";

import "codemirror/keymap/sublime";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/comment/comment";
import "codemirror/addon/selection/active-line";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/seti.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/theme/mbo.css";

import receiveConsole from "./utils/receiveConsole";

import Header from "./Header/Header";
import Layout from "./Layouts/Layout";

export default function App() {
  useEffect(() => {
    window.addEventListener("message", receiveConsole, false);
  }, [window]);

  return (
    <Container className="App vh-100 p-0" fluid>
      <Header />
      <Layout />
    </Container>
  );
}
