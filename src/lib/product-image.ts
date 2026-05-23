/**
 * URL for a product image under public/products/.
 * Catalog uses safe filenames: {product-id}.webp
 */
export function productImageSrc(catalogPath: string): string {
  if (!catalogPath) return catalogPath;
  const normalized = catalogPath.startsWith("/") ? catalogPath : `/${catalogPath}`;
  // Safe ids only need encoding for rare edge cases
  if (/^\/products\/[^/]+\/[a-z0-9-]+\.webp$/i.test(normalized)) {
    return normalized;
  }

  const slash = normalized.lastIndexOf("/");
  if (slash === -1) return encodeURI(normalized);

  const dir = normalized.slice(0, slash + 1);
  let filename = normalized.slice(slash + 1);

  try {
    if (filename.includes("%")) {
      filename = decodeURIComponent(filename);
    }
  } catch {
    /* use raw filename */
  }

  const encoded = encodeURIComponent(filename).replace(/%2B/gi, "+");
  return `${dir}${encoded}`;
}
