const javascript = `/*     WELCOME TO LITE EDITOR      */
const str = 'Hello Coder';

function sayHello() {
  console.log(str);
}

sayHello();
`;

export let trackingConsole = `
(function() {
  const _privateLog = window.console.log;
  const _privateError = window.console.error;
  const _privateWarn = window.console.warn;
  
  window.console.log = function(...args) {
    // fix for Nodes from iframe DOM
    const parseArgs = obj = JSON.parse(JSON.stringify(args));
    /* HELLO THERE */
    _privateLog.apply(console, parseArgs);
    window.top.postMessage({ args: parseArgs, type: 'log' }, '*');
  }
  window.console.error = function(...args) {
    _privateError.apply(console, args);
    window.top.postMessage({ args, type: 'error' }, '*');
  }
  window.console.warn = function(...args) {
    _privateWarn.apply(console, args);
    window.top.postMessage({ args, type: 'warn' }, '*');
  }
  window.onerror = function (error, file, line) {
    console.error({error});
    return true;
}
})()`;

export default javascript;
