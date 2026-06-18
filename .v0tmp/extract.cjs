const fs = require("fs");
const s = fs.readFileSync("bundle.js", "utf8");
const re = /([A-Za-z_$][A-Za-z0-9_$]*)=\[\{/g;
let m;
const results = [];
while ((m = re.exec(s))) {
  const start = m.index + m[0].length - 2; // position at [
  let i = start, depth = 0, inStr = false, q = "", out = "";
  for (; i < s.length; i++) {
    const c = s[i];
    out += c;
    if (inStr) {
      if (c === "\\") { out += s[i + 1]; i++; continue; }
      if (c === q) inStr = false;
    } else {
      if (c === '"' || c === "'" || c === "`") { inStr = true; q = c; }
      else if (c === "[") depth++;
      else if (c === "]") { depth--; if (depth === 0) break; }
    }
  }
  results.push({ name: m[1], len: out.length, text: out });
}
results.forEach((r) => {
  fs.writeFileSync("arr_" + r.name + ".txt", r.text);
  console.log(r.name, "len=" + r.len, "preview:", r.text.slice(0, 100).replace(/\s+/g, " "));
});
