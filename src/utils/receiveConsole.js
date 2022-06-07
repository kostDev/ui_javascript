import prittyObject from "./prittyObject";

const maxConsoleOutput = 10;

const receiveConsole = ({ data }) => {
  const { args, type } = data;
  if (type && args) {
    const consoleUi = document.getElementById("consoleUI");
    if (consoleUi) {
      const consoleOutput = consoleUi.children;
      const div = document.createElement("div");

      // for (const el of consoleOutput) {
      //   el.classList.add("opacity-25");
      // }
      // clear old log
      if (consoleOutput.length > maxConsoleOutput) {
        const removeVal = consoleOutput.length - maxConsoleOutput;
        for (let i = 0; i < removeVal; i++) {
          consoleUi.removeChild(consoleOutput[consoleOutput.length - 1]);
        }
      }

      if (Array.isArray(args)) {
        args.forEach(
          (val) => (div.innerHTML += `<pre>${prittyObject(val)}</pre>`)
        );
      } else {
        div.innerHTML = `<pre>${prittyObject(args)}</pre>`;
      }
      // new Date().toLocaleTimeString()`;
      div.classList.add("border-secondary", "position-relative");
      consoleUi.prepend(div);
      // console.log('here', args, type)
    }
  }
};

export default receiveConsole;
