const fs = require("fs");
const map = {
  R: "heroSlides",
  Y: "navItems",
  qf: "certifications",
  Qp: "timeline",
  Gp: "industries",
  Cn: "products",
  Ip: "blogPosts",
};
let out = "// Content data for CR Rubber & Seals Private Limited\n// Extracted faithfully from the source site data model.\n\n";
for (const [k, name] of Object.entries(map)) {
  const text = fs.readFileSync(".v0tmp/arr_" + k + ".txt", "utf8");
  out += "export const " + name + " = " + text + " as const\n\n";
}
fs.writeFileSync("lib/site-data.ts", out);
console.log("wrote lib/site-data.ts, bytes:", out.length);
