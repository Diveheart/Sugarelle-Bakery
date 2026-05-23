import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

function productImageSrc(catalogPath) {
  const normalized = catalogPath.startsWith("/") ? catalogPath : `/${catalogPath}`;
  const slash = normalized.lastIndexOf("/");
  if (slash === -1) return encodeURI(normalized);
  const dir = normalized.slice(0, slash + 1);
  let filename = normalized.slice(slash + 1);
  try {
    if (filename.includes("%")) filename = decodeURIComponent(filename);
  } catch {
    /* */
  }
  const encodedName = filename
    .split("+")
    .map((part) => encodeURIComponent(part))
    .join("+");
  return `${dir}${encodedName}`;
}

function resolveFile(catalogPath) {
  let filename = catalogPath.replace(/^\/products\/[^/]+\//, "");
  try {
    if (filename.includes("%")) filename = decodeURIComponent(filename);
  } catch {
    /* */
  }
  const category = catalogPath.match(/^\/products\/([^/]+)\//)?.[1];
  return path.join(ROOT, "public", "products", category, filename);
}

const catalog = fs.readFileSync(path.join(ROOT, "src/data/cake-catalog.ts"), "utf8");
const images = [...catalog.matchAll(/"image": "([^"]+)"/g)].map((m) => m[1]);
const broken = [];

for (const img of images) {
  const file = resolveFile(img);
  if (!fs.existsSync(file)) {
    broken.push({ img, file, reason: "file missing" });
  }
}

console.log(`Catalog images: ${images.length}`);
console.log(`Missing on disk: ${broken.length}`);
broken.slice(0, 20).forEach((b) => console.log(b.img, "\n ->", b.file));

const withPercent = images.filter((i) => i.includes("%"));
console.log(`\nStill pre-encoded in catalog: ${withPercent.length}`);
withPercent.slice(0, 5).forEach((i) => console.log(i));
