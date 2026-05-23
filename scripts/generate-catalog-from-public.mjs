/**
 * Scan public/products/<category>/ (depth 1) and regenerate src/data/cake-catalog.ts
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_DIR = path.join(ROOT, "public", "products");
const OUT_FILE = path.join(ROOT, "src", "data", "cake-catalog.ts");

const IMAGE_EXTS = new Set([".webp", ".jpg", ".jpeg", ".png"]);
const SKIP_EXTS = new Set([".heic", ".heif"]);

const CATEGORY_SLUGS = [
  "biscoff-cake",
  "continental-economy-cake",
  "custom-cake",
  "dessert",
  "double-premium-cake",
  "pavlova-cake",
  "premium-economy-cake",
  "snowy-cheese",
  "wedding-engagement-cake",
];

const CATEGORY_DISPLAY_NAME = {
  "biscoff-cake": "Biscoff Cake",
  "continental-economy-cake": "Continental Economy Cake",
  "custom-cake": "Custom Cake",
  dessert: "Dessert",
  "double-premium-cake": "Double Premium Cake",
  "pavlova-cake": "Pavlova Cake",
  "premium-economy-cake": "Premium Economy Cake",
  "snowy-cheese": "Snowy Cheese",
  "wedding-engagement-cake": "Wedding-Engagement Cake",
};

const CATEGORY_DEFAULTS = {
  "biscoff-cake": {
    priceBySizeRm: { 6: 45, 8: 70, 10: 110 },
    startingPriceRm: 45,
    hideSizeSelector: false,
  },
  "continental-economy-cake": {
    priceBySizeRm: { 6: 40, 8: 58, 10: 100 },
    startingPriceRm: 40,
    hideSizeSelector: false,
  },
  "custom-cake": { startingPriceRm: 55, hideSizeSelector: true },
  "dessert": { startingPriceRm: 25, hideSizeSelector: true },
  "double-premium-cake": {
    priceBySizeRm: { 8: 130 },
    startingPriceRm: 130,
    availableSizesIn: [8],
    hideSizeSelector: false,
  },
  "pavlova-cake": {
    priceBySizeRm: { 9: 75 },
    startingPriceRm: 75,
    availableSizesIn: [9],
    hideSizeSelector: false,
  },
  "premium-economy-cake": { startingPriceRm: 65, hideSizeSelector: false },
  "snowy-cheese": {
    priceBySizeRm: { 8: 70 },
    startingPriceRm: 70,
    availableSizesIn: [8],
    hideSizeSelector: false,
  },
  "wedding-engagement-cake": { startingPriceRm: 120, hideSizeSelector: true },
};

const CAKE_CATEGORIES_BLOCK = `export const CAKE_CATEGORIES: CakeCategory[] = [
  {
    slug: "biscoff-cake",
    name: "Biscoff Cake",
    description: "Caramelized Biscoff goodness in every bite.",
    startingPriceRm: 45,
  },
  {
    slug: "continental-economy-cake",
    name: "Continental Economy Cake",
    description: "Classic continental-style cakes at a friendly price point.",
    startingPriceRm: 40,
  },
  {
    slug: "custom-cake",
    name: "Custom Cake",
    description: "Personalized cakes made to match your theme and occasion.",
    startingPriceRm: 55,
  },
  {
    slug: "dessert",
    name: "Dessert",
    description: "Sweet treats beyond cakes—cupcakes, tarts, slices and more.",
    startingPriceRm: 25,
  },
  {
    slug: "double-premium-cake",
    name: "Double Premium Cake",
    description: "Extra indulgent cakes with premium fillings and finishes.",
    startingPriceRm: 130,
  },
  {
    slug: "pavlova-cake",
    name: "Pavlova Cake",
    description: "Crisp meringue, soft center, and fresh fruity toppings.",
    startingPriceRm: 75,
  },
  {
    slug: "premium-economy-cake",
    name: "Premium Economy Cake",
    description: "A premium touch while keeping it budget-friendly.",
    startingPriceRm: 65,
  },
  {
    slug: "snowy-cheese",
    name: "Snowy Cheese",
    description: "Creamy, cheesy, and irresistibly soft.",
    startingPriceRm: 70,
  },
  {
    slug: "wedding-engagement-cake",
    name: "Wedding-Engagement Cake",
    description: "Elegant statement cakes for your biggest celebrations.",
    startingPriceRm: 120,
  },
];`;

function decodeFilename(name) {
  return name
    .replace(/\+/g, " ")
    .replace(/_/g, (m, i, s) => {
      // size markers like 8_ -> 8"
      if (/\d_$/.test(s.slice(Math.max(0, i - 2), i + 2))) return '"';
      return " ";
    })
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeDedupeKey(stem) {
  let s = decodeFilename(stem);
  s = s.replace(/\(\d+\)\s*$/i, "").trim();
  s = s.replace(/\s*\(\d+\)\s*$/i, "").trim();
  s = s.replace(/_+$/, "").trim();
  s = s.replace(/\s+/g, " ").toLowerCase();
  return s;
}

function fileScore(filename) {
  const ext = path.extname(filename).toLowerCase();
  const stem = path.basename(filename, ext);
  let score = 0;
  if (ext === ".webp") score += 20;
  else if (ext === ".jpg" || ext === ".jpeg") score += 10;
  else if (ext === ".png") score += 5;
  if (/\(\d+\)$/i.test(stem)) score -= 5;
  if (/_[\da-f]{6,}$/i.test(stem)) score -= 3; // old drive id suffix
  return score;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "item";
}

function isUuidLike(name) {
  const n = name.replace(/\s/g, "");
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n)) {
    return true;
  }
  if (/^[0-9a-f]{32}$/i.test(n)) return true;
  return false;
}

/** Camera exports, hashes, etc. — use category display name instead */
function isImproperFilename(stem) {
  const raw = decodeFilename(stem).replace(/\(\d+\)\s*$/i, "").trim();
  const compact = raw.replace(/[\s_-]/g, "").toLowerCase();
  const stemLower = stem.replace(/\+/g, " ").toLowerCase();

  if (!raw || raw.length < 2) return true;
  if (isUuidLike(raw)) return true;
  if (/^img[-_\s]?\d/i.test(raw) || /^img\d/i.test(compact)) return true;
  if (/^fb[-_\s]?img/i.test(raw) || /^fbimg/i.test(compact) || /^fb_img/i.test(stemLower)) {
    return true;
  }
  if (/^img\d{8,}/i.test(compact)) return true;
  if (/^[0-9a-f-]{20,}$/i.test(raw.replace(/\s/g, ""))) return true;
  return false;
}

function parsePricesFromText(text) {
  const prices = {};
  const t = decodeFilename(text);

  const patterns = [
    /(?:size\s*)?(\d+)\s*["\u201d]?\s*(?:inch|in)?\s*(?:rm|RM)\s*(\d+(?:\.\d+)?)/gi,
    /(\d+)\s*["\u201d]\s*(?:rm|RM)\s*(\d+(?:\.\d+)?)/gi,
    /(?:^|\s)(\d+)\s*["\u201d]?\s*(?:rm|RM)\s*(\d+(?:\.\d+)?)/gi,
  ];

  for (const re of patterns) {
    let m;
    while ((m = re.exec(t)) !== null) {
      const size = parseInt(m[1], 10);
      const price = parseFloat(m[2]);
      if (size >= 6 && size <= 14) prices[size] = price;
    }
  }

  return prices;
}

function parsePerUnit(text) {
  const t = decodeFilename(text);
  let m = t.match(/(?:rm|RM)\s*(\d+(?:\.\d+)?)\s*\/\s*pcs/i);
  if (m) return { price: parseFloat(m[1]), label: "per piece" };
  m = t.match(/(\d+(?:\.\d+)?)\s*\/\s*pcs/i);
  if (m) return { price: parseFloat(m[1]), label: "per piece" };
  m = t.match(/(?:rm|RM)\s*(\d+(?:\.\d+)?)\s*\/\s*25pcs/i);
  if (m) return { price: parseFloat(m[1]), label: "per 25 pcs" };
  m = t.match(/(?:rm|RM)\s*(\d+(?:\.\d+)?)\s*\/\s*50pcs/i);
  if (m) return { price: parseFloat(m[1]), label: "per 50 pcs" };
  m = t.match(/(?:rm|RM)\s*(\d+(?:\.\d+)?)\s*\/\s*30pcs/i);
  if (m) return { price: parseFloat(m[1]), label: "per 30 pcs" };
  m = t.match(/rm\s*(\d+(?:\.\d+)?)\s*\/\s*25pcs/i);
  if (m) return { price: parseFloat(m[1]), label: "per 25 pcs" };
  return null;
}

function extractProductName(stem, categorySlug) {
  let raw = decodeFilename(stem);
  raw = raw.replace(/\(\d+\)\s*$/i, "").trim();

  // Strip trailing price/size clutter for named products
  const priceIdx = raw.search(
    /\s*(?:size|SIZE|rm|RM|\d+\s*["\u201d]|\/\s*\d+pcs)/i,
  );
  if (priceIdx > 3) raw = raw.slice(0, priceIdx).trim();
  raw = raw.replace(/[-–—]+\s*$/, "").trim();
  raw = raw.replace(/\s+as\s*\+.*$/i, "").trim();

  if (isUuidLike(raw.replace(/\s/g, ""))) {
    return null; // handled separately
  }

  if (categorySlug === "pavlova-cake" && isUuidLike(raw.replace(/[^a-f0-9-]/gi, ""))) {
    return "Pavlova Cake";
  }

  if (isImproperFilename(stem)) {
    return null;
  }

  if (raw.length < 2) return null;

  // Title-case ALL CAPS product names
  if (raw === raw.toUpperCase() && /[A-Z]/.test(raw)) {
    return raw
      .split(/\s+/)
      .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
      .join(" ");
  }

  return raw;
}

function materializeProductImage(product) {
  const ext = path.extname(product.filename).toLowerCase() || ".webp";
  const safeName = `${product.id}${ext}`;
  const categoryDir = path.join(PRODUCTS_DIR, product.categorySlug);
  const src = path.join(categoryDir, product.filename);
  const dest = path.join(categoryDir, safeName);

  if (!fs.existsSync(src)) {
    console.warn(`Missing source image: ${src}`);
    return `/products/${product.categorySlug}/${safeName}`;
  }

  if (path.basename(src) !== safeName && !fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
  }

  return `/products/${product.categorySlug}/${safeName}`;
}

function listTopLevelImages(categorySlug) {
  const dir = path.join(PRODUCTS_DIR, categorySlug);
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).filter((e) => {
    if (!e.isFile()) return false;
    const ext = path.extname(e.name).toLowerCase();
    if (SKIP_EXTS.has(ext)) return false;
    return IMAGE_EXTS.has(ext);
  }).map((e) => e.name);
}

function pickBestPerProduct(files) {
  const groups = new Map();

  for (const file of files) {
    const ext = path.extname(file);
    const stem = path.basename(file, ext);
    const key = normalizeDedupeKey(stem);
    const prev = groups.get(key);
    if (!prev || fileScore(file) > fileScore(prev)) {
      groups.set(key, file);
    }
  }

  return [...groups.entries()].map(([key, file]) => ({ key, file }));
}

function buildDescription(product, categorySlug) {
  if (product.perUnit) {
    const minMatch = decodeFilename(product.filename).match(/minimum\s+(\d+)\s*pcs/i);
    const min = minMatch ? ` Minimum ${minMatch[1]} pcs.` : "";
    return `RM${formatPrice(product.startingPriceRm)} ${product.perUnit.label}.${min}`;
  }

  if (product.hideSizeSelector && (categorySlug === "custom-cake" || categorySlug === "wedding-engagement-cake")) {
    return `From RM${formatPrice(product.startingPriceRm)}. Contact us on WhatsApp for sizing and custom quotes.`;
  }

  if (product.priceBySizeRm && Object.keys(product.priceBySizeRm).length > 0) {
    const bits = Object.entries(product.priceBySizeRm)
      .sort(([a], [b]) => Number(a) - Number(b))
      .map(([s, p]) => `${s}" RM${formatPrice(p)}`);
    return `Available sizes: ${bits.join(", ")}.`;
  }

  return `From RM${formatPrice(product.startingPriceRm)}.`;
}

function formatPrice(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function resolveDisplayName(stem, categorySlug, categoryNameCounter) {
  const categoryLabel = CATEGORY_DISPLAY_NAME[categorySlug] ?? categorySlug;

  if (isImproperFilename(stem)) {
    categoryNameCounter.value += 1;
    if (categoryNameCounter.value === 1) return categoryLabel;
    return `${categoryLabel} ${categoryNameCounter.value}`;
  }

  const extracted = extractProductName(stem, categorySlug);
  if (!extracted) {
    categoryNameCounter.value += 1;
    if (categoryNameCounter.value === 1) return categoryLabel;
    return `${categoryLabel} ${categoryNameCounter.value}`;
  }

  return extracted;
}

function buildProduct(categorySlug, file, index, categoryNameCounter, options = {}) {
  const defaults = CATEGORY_DEFAULTS[categorySlug];
  const ext = path.extname(file);
  const stem = path.basename(file, ext);
  const hint = decodeFilename(stem);

  let name;
  if (options.forceName) {
    name = options.forceName;
  } else {
    name = resolveDisplayName(stem, categorySlug, categoryNameCounter);
  }

  const filePrices = parsePricesFromText(hint);
  const perUnit = parsePerUnit(hint);

  let priceBySizeRm = { ...(defaults.priceBySizeRm || {}) };
  Object.assign(priceBySizeRm, filePrices);

  let hideSizeSelector = defaults.hideSizeSelector ?? false;
  if (categorySlug === "dessert") hideSizeSelector = true;

  let startingPriceRm = defaults.startingPriceRm;
  if (perUnit) {
    startingPriceRm = perUnit.price;
  } else if (Object.keys(priceBySizeRm).length > 0) {
    startingPriceRm = Math.min(...Object.values(priceBySizeRm));
  }

  let availableSizesIn = defaults.availableSizesIn;
  if (!availableSizesIn && Object.keys(priceBySizeRm).length > 0) {
    availableSizesIn = Object.keys(priceBySizeRm)
      .map(Number)
      .sort((a, b) => a - b);
  }

  const id = options.forceId ?? `${categorySlug}-${slugify(name)}`;
  const product = {
    id,
    categorySlug,
    name,
    filename: file,
    startingPriceRm,
    description: "",
    image: "", // set after id is finalized via materializeProductImage()
    hideSizeSelector,
  };

  if (perUnit) product.perUnit = perUnit;
  if (Object.keys(priceBySizeRm).length > 0 && !hideSizeSelector) {
    product.priceBySizeRm = priceBySizeRm;
  }
  if (availableSizesIn?.length && !hideSizeSelector) {
    product.availableSizesIn = availableSizesIn;
  }

  product.description = buildDescription(product, categorySlug);
  return product;
}

function dedupeIds(products) {
  const seen = new Map();
  return products.map((p) => {
    let id = p.id;
    if (seen.has(id)) {
      const n = seen.get(id) + 1;
      seen.set(id, n);
      id = `${id}-${n}`;
    } else {
      seen.set(id, 1);
    }
    return { ...p, id };
  });
}

function serializeProducts(products) {
  return JSON.stringify(
    products.map(({ filename, perUnit, ...rest }) => rest),
    null,
    2,
  );
}

function pickBestFile(files) {
  return files.reduce((best, file) =>
    fileScore(file) > fileScore(best) ? file : best,
  );
}

function main() {
  const allProducts = [];

  for (const slug of CATEGORY_SLUGS) {
    const files = listTopLevelImages(slug);

    // Biscoff folder has two photos of the same cake — one product only
    if (slug === "biscoff-cake") {
      if (files.length > 0) {
        const best = pickBestFile(files);
        allProducts.push(
          buildProduct(slug, best, 0, { value: 0 }, {
            forceName: CATEGORY_DISPLAY_NAME["biscoff-cake"],
            forceId: "biscoff-cake",
          }),
        );
        console.log(`${slug}: 1 product (from ${files.length} files)`);
      }
      continue;
    }

    const categoryNameCounter = { value: 0 };
    const picked = pickBestPerProduct(files);
    picked.forEach(({ file }, i) => {
      allProducts.push(buildProduct(slug, file, i, categoryNameCounter));
    });
    console.log(`${slug}: ${picked.length} products (from ${files.length} files)`);
  }

  const products = dedupeIds(allProducts).map((p) => ({
    ...p,
    image: materializeProductImage(p),
  }));
  console.log(`Total: ${products.length} products`);

  const header = `export type CakeCategory = {
  slug: string;
  name: string;
  description: string;
  /** Size-6 starting price (RM) */
  startingPriceRm: number;
};

export type CakeProduct = {
  id: string;
  categorySlug: string;
  name: string;
  description: string;
  /** Default / lowest price (RM) */
  startingPriceRm: number;
  priceBySizeRm?: Partial<Record<number, number>>;
  /** When set, only these inch sizes appear in the size selector */
  availableSizesIn?: readonly number[];
  /** Hide inch size dropdown (desserts, custom, wedding) */
  hideSizeSelector?: boolean;
  image: string;
};

export const CAKE_SIZES_IN = [6, 8, 9, 10, 12] as const;

`;

  const footer = `
export const CAKE_PRODUCTS_BY_CATEGORY: Record<string, CakeProduct[]> = CAKE_PRODUCTS.reduce<
  Record<string, CakeProduct[]>
>((acc, p) => {
  (acc[p.categorySlug] ??= []).push(p);
  return acc;
}, {});

export function getCategoryBySlug(slug: string) {
  return CAKE_CATEGORIES.find((c) => c.slug === slug) ?? null;
}
`;

  const content =
    header +
    CAKE_CATEGORIES_BLOCK +
    "\n\nexport const CAKE_PRODUCTS: CakeProduct[] = " +
    serializeProducts(products) +
    ";\n" +
    footer;

  fs.writeFileSync(OUT_FILE, content, "utf8");
  console.log(`Wrote ${OUT_FILE}`);
}

main();
