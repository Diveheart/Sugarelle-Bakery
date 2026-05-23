import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const catalog = fs.readFileSync(path.join(ROOT, "src/data/cake-catalog.ts"), "utf8");
const dessert = [...catalog.matchAll(/"image": "(\/products\/dessert\/[^"]+)"/g)].map(
  (m) => m[1],
);

function productImageSrc(catalogPath) {
  const slash = catalogPath.lastIndexOf("/");
  const dirPart = catalogPath.slice(0, slash + 1);
  let filename = catalogPath.slice(slash + 1);
  try {
    if (filename.includes("%")) filename = decodeURIComponent(filename);
  } catch {
    /* */
  }
  const encoded = filename
    .split("+")
    .map((part) => encodeURIComponent(part))
    .join("+");
  return dirPart + encoded;
}

const ports = [8080, 8081, 5173];
let base = null;
for (const port of ports) {
  try {
    const res = await fetch(`http://localhost:${port}/`);
    if (res.ok) {
      base = `http://localhost:${port}`;
      break;
    }
  } catch {
    /* */
  }
}

if (!base) {
  console.log("No dev server found");
  process.exit(1);
}
console.log("Using", base);

const failed = [];
for (const img of dessert) {
  const url = productImageSrc(img);
  const res = await fetch(base + url, { method: "HEAD" });
  if (!res.ok) failed.push({ img, url, status: res.status });
}

console.log(`Dessert images: ${dessert.length}, failed HTTP: ${failed.length}`);
failed.forEach((f) => console.log(f.status, f.url));
