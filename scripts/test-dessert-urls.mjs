import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const dir = path.join(ROOT, "public/products/dessert");

function oldSrc(catalogPath) {
  const filename = catalogPath.split("/").pop();
  const dirPart = catalogPath.slice(0, catalogPath.lastIndexOf("/") + 1);
  return dirPart + filename.split("+").map((x) => encodeURIComponent(x)).join("+");
}

function newSrc(catalogPath) {
  const slash = catalogPath.lastIndexOf("/");
  return catalogPath.slice(0, slash + 1) + encodeURI(catalogPath.slice(slash + 1));
}

function fixedSrc(catalogPath) {
  const slash = catalogPath.lastIndexOf("/");
  const dirPart = catalogPath.slice(0, slash + 1);
  let filename = catalogPath.slice(slash + 1);
  const encoded = encodeURIComponent(filename).replace(/%2B/gi, "+");
  return dirPart + encoded;
}

const catalog = fs.readFileSync(path.join(ROOT, "src/data/cake-catalog.ts"), "utf8");
const dessert = [...catalog.matchAll(/"image": "(\/products\/dessert\/[^"]+)"/g)].map(
  (m) => m[1],
);

console.log("Testing", dessert.length, "dessert catalog paths\n");

for (const img of dessert) {
  const name = img.split("/").pop();
  const disk = path.join(dir, name);
  if (!fs.existsSync(disk)) {
    console.log("MISSING ON DISK:", name);
    continue;
  }
  const oldUrl = oldSrc(img);
  const newUrl = newSrc(img);
  if (oldUrl !== newUrl) {
    console.log("ENCODING FIX:", name.slice(0, 60));
    console.log("  old:", oldUrl);
    console.log("  new:", newUrl);
  }
}

// Files with many consecutive + signs
for (const f of fs.readdirSync(dir)) {
  if (/\+{3,}/.test(f)) {
    const img = `/products/dessert/${f}`;
    if (oldSrc(img) !== newSrc(img)) {
      console.log("\nMULTI-PLUS:", f);
      console.log("  old:", oldSrc(img));
      console.log("  new:", newSrc(img));
    }
  }
}

const b =
  "/products/dessert/Brownies+choc+++++++_8_+rm38+36pcs++++++_10_+64pcs+Rm60_ (1).webp";
console.log("\nBrownies example:");
console.log("old:", oldSrc(b));
console.log("encodeURI:", newSrc(b));
console.log("fixed:", fixedSrc(b));

let fixedDiff = 0;
for (const img of dessert) {
  if (oldSrc(img) !== fixedSrc(img)) fixedDiff++;
}
console.log("\nPaths where fixed !== old:", fixedDiff);
