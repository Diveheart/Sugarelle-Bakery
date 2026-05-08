export type CakeCategory = {
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
  /** Size-6 starting price (RM) */
  startingPriceRm: number;
  /**
   * Optional explicit table to fill later.
   * If provided, CakeCard will use this price for the selected size.
   */
  priceBySizeRm?: Partial<Record<number, number>>;
  /** Placeholder for now (replace with your real images later) */
  image: string;
};

export const CAKE_SIZES_IN = [6, 8, 10, 12] as const;

export const CAKE_CATEGORIES: CakeCategory[] = [
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
    startingPriceRm: 45,
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
    description: "Sweet treats beyond cakes—perfect for sharing.",
    startingPriceRm: 45,
  },
  {
    slug: "double-premium-cake",
    name: "Double Premium Cake",
    description: "Extra indulgent cakes with premium fillings and finishes.",
    startingPriceRm: 45,
  },
  {
    slug: "pavlova-cake",
    name: "Pavlova Cake",
    description: "Crisp meringue, soft center, and fresh fruity toppings.",
    startingPriceRm: 45,
  },
  {
    slug: "premium-economy-cake",
    name: "Premium Economy Cake",
    description: "A premium touch while keeping it budget-friendly.",
    startingPriceRm: 45,
  },
  {
    slug: "snowy-cheese",
    name: "Snowy Cheese",
    description: "Creamy, cheesy, and irresistibly soft.",
    startingPriceRm: 45,
  },
  {
    slug: "wedding-engagement-cake",
    name: "Wedding-Engagement Cake",
    description: "Elegant statement cakes for your biggest celebrations.",
    startingPriceRm: 120,
  },
];

function placeholderImage(text: string) {
  return `https://placehold.co/800x800/png?text=${encodeURIComponent(text)}`;
}

const PRODUCT_COUNT_PER_CATEGORY = 6;

export const CAKE_PRODUCTS: CakeProduct[] = CAKE_CATEGORIES.flatMap((c) => {
  const prefix = c.slug.replace(/-cake$/, "").replace(/-/g, "");
  return Array.from({ length: PRODUCT_COUNT_PER_CATEGORY }, (_, i) => {
    const n = i + 1;
    const displayName = `${c.name} ${n}`;
    return {
      id: `${c.slug}-${prefix}${n}`,
      categorySlug: c.slug,
      name: displayName,
      description: `A delicious ${c.name.toLowerCase()} option. (Replace this placeholder text with the real product description.)`,
      startingPriceRm: c.startingPriceRm,
      image: placeholderImage(displayName),
    };
  });
});

export const CAKE_PRODUCTS_BY_CATEGORY: Record<string, CakeProduct[]> = CAKE_PRODUCTS.reduce<
  Record<string, CakeProduct[]>
>((acc, p) => {
  (acc[p.categorySlug] ??= []).push(p);
  return acc;
}, {});

export function getCategoryBySlug(slug: string) {
  return CAKE_CATEGORIES.find((c) => c.slug === slug) ?? null;
}

