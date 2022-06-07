const prittyObject = function (val) {
  let jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/gm;
  let replacer = function (match, pIndent, pKey, pVal, pEnd) {
    let key = '<span class="json-key" style="color: purple">',
      val = '<span class="json-value" style="color: #5858f1">',
      str = '<span class="json-string" style="color: forestgreen">',
      r = pIndent || "";
    if (pKey) r = r + key + pKey.replace(/[": ]/g, "") + "</span>: ";
    if (pVal) r = r + (pVal[0] === '"' ? str : val) + pVal + "</span>";
    return r + (pEnd || "");
  };

  return JSON.stringify(val, null, 3)
    .replace(/&/g, "&amp;")
    .replace(/\\"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(jsonLine, replacer);
};

export default prittyObject;
