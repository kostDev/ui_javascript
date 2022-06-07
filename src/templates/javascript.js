const javascript = `/*     WELCOME TO LITE EDITOR      */
const str = 'Hello Coder';

function sayHello() {
  console.log(str);
}

sayHello();
`;

export let trackingConsole = `
(function() {
  const _myConsole = window.console.log;
  window.console.log = (...args) => {
    _myConsole(...args);
    window.top.postMessage({ args, type: 'log' }, '*');
  }
})()`;

export default javascript;
