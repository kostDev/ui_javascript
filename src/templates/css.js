const css = `/* -= CSS HERE =- */
body {
  background-color: black;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

#app {
\tdisplay: flex;
  text-align: center;
\theight: 100%;
}

#text {
  color: #4ed353;
  float: inline-start;
  font-family: monospace;
  font-size: 32px;
\tmargin: 25% auto;
}

#blink {
  animation: blinker 1.5s step-start infinite;
}

#blink:after {
  content: '|';
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
`;

export const cssP5 = `html, body {
  background: black;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
canvas {
  display: block;
  margin: 1rem;
  float: right;
}`;

export default css;
