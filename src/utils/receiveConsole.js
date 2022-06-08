import prittyObject from "./prittyObject";

const maxConsoleOutput = 10;
const setCurrentConsoleTime = () => {
  const classes = "position-absolute pt-2 pe-2 top-0 end-0 fs-10 text-muted";
  const date = new Date().toLocaleTimeString();
  return `<span class="${classes}">${date}</span>`;
};

const logClass = (t) => {
  switch (t) {
    case "log":
      return "alert-secondary";
    case "error":
      return "alert-danger";
    case "warn":
      return "alert-warning";
    default:
      return;
  }
};

const receiveConsole = ({ data }) => {
  const { args, type } = data;
  if (type && args) {
    const consoleUi = document.getElementById("consoleUI");
    if (consoleUi) {
      const consoleOutput = consoleUi.children;
      const div = document.createElement("div");
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
      div.innerHTML += setCurrentConsoleTime();
      div.classList.add(
        logClass(type),
        "bsh-silver",
        "border-secondary",
        "position-relative",
        "p-2",
        "mb-2",
        "rounded-1"
      );
      consoleUi.prepend(div);
      // console.log('here', type)
    }
  }
};

export default receiveConsole;
