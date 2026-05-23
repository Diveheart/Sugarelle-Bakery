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
];

export const CAKE_PRODUCTS: CakeProduct[] = [
  {
    "id": "biscoff-cake",
    "categorySlug": "biscoff-cake",
    "name": "Biscoff Cake",
    "startingPriceRm": 45,
    "description": "Available sizes: 6\" RM45, 8\" RM70, 10\" RM110.",
    "image": "/products/biscoff-cake/biscoff-cake.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 45,
      "8": 70,
      "10": 110
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-blueberry",
    "categorySlug": "continental-economy-cake",
    "name": "Blueberry",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-blueberry.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-choc-indulgence",
    "categorySlug": "continental-economy-cake",
    "name": "Choc Indulgence",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-choc-indulgence.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-easy-choc",
    "categorySlug": "continental-economy-cake",
    "name": "Easy Choc",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-easy-choc.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-mangoes",
    "categorySlug": "continental-economy-cake",
    "name": "Mangoes",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-mangoes.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-orange",
    "categorySlug": "continental-economy-cake",
    "name": "Orange",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-orange.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-oreo",
    "categorySlug": "continental-economy-cake",
    "name": "Oreo",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-oreo.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-pandan-gula-melaka",
    "categorySlug": "continental-economy-cake",
    "name": "Pandan Gula Melaka",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-pandan-gula-melaka.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-red-velvet-cheese",
    "categorySlug": "continental-economy-cake",
    "name": "Red Velvet Cheese",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-red-velvet-cheese.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "continental-economy-cake-tiramisu",
    "categorySlug": "continental-economy-cake",
    "name": "Tiramisu",
    "startingPriceRm": 40,
    "description": "Available sizes: 6\" RM40, 8\" RM58, 10\" RM100.",
    "image": "/products/continental-economy-cake/continental-economy-cake-tiramisu.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "6": 40,
      "8": 58,
      "10": 100
    },
    "availableSizesIn": [
      6,
      8,
      10
    ]
  },
  {
    "id": "custom-cake-custom-cake",
    "categorySlug": "custom-cake",
    "name": "Custom Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-2",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 2",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-3",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 3",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-3.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-4",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 4",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-4.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-5",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 5",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-5.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-6",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 6",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-6.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-7",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 7",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-7.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-8",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 8",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-9",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 9",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-9.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-10",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 10",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-10.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-11",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 11",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-11.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-12",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 12",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-12.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-13",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 13",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-13.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-14",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 14",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-14.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-15",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 15",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-15.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-16",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 16",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-16.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-17",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 17",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-17.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-18",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 18",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-18.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-19",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 19",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-19.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-20",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 20",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-20.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-21",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 21",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-21.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-22",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 22",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-22.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-23",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 23",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-23.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-24",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 24",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-24.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-25",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 25",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-25.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-26",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 26",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-26.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-27",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 27",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-27.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-28",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 28",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-28.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-29",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 29",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-29.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-30",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 30",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-30.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-31",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 31",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-31.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-32",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 32",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-32.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-33",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 33",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-33.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-34",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 34",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-34.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-35",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 35",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-35.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-36",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 36",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-36.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-37",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 37",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-37.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-38",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 38",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-38.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-39",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 39",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-39.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-40",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 40",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-40.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-41",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 41",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-41.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-42",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 42",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-42.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-43",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 43",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-43.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-44",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 44",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-44.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-45",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 45",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-45.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-46",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 46",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-46.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-47",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 47",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-47.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-48",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 48",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-48.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-49",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 49",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-49.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-50",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 50",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-50.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-51",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 51",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-51.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-52",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 52",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-52.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-53",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 53",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-53.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-54",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 54",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-54.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-55",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 55",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-55.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-56",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 56",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-56.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-57",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 57",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-57.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-58",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 58",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-58.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-59",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 59",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-59.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cake-60",
    "categorySlug": "custom-cake",
    "name": "Custom Cake 60",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cake-60.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-assorted-cupcake",
    "categorySlug": "dessert",
    "name": "Assorted Cupcake",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-assorted-cupcake.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-assorted-cupcake-2",
    "categorySlug": "dessert",
    "name": "Assorted Cupcake",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-assorted-cupcake-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-assorted-cupcake-3",
    "categorySlug": "dessert",
    "name": "Assorted Cupcake",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-assorted-cupcake-3.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-assorted-sandwich",
    "categorySlug": "dessert",
    "name": "ASSORTED Sandwich",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-assorted-sandwich.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-assorted-sandwich-2",
    "categorySlug": "dessert",
    "name": "ASSORTED Sandwich",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-assorted-sandwich-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-brownies-choc-8",
    "categorySlug": "dessert",
    "name": "Brownies choc 8",
    "startingPriceRm": 38,
    "description": "From RM38.",
    "image": "/products/dessert/dessert-brownies-choc-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-brownies-choc-8-2",
    "categorySlug": "dessert",
    "name": "Brownies choc 8",
    "startingPriceRm": 38,
    "description": "From RM38.",
    "image": "/products/dessert/dessert-brownies-choc-8-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-cheesetart-bajet",
    "categorySlug": "dessert",
    "name": "Cheesetart bajet",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-cheesetart-bajet.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-cheesetart-montok",
    "categorySlug": "dessert",
    "name": "Cheesetart Montok",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-cheesetart-montok.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-cheesetart-separa-montok",
    "categorySlug": "dessert",
    "name": "Cheesetart Separa montok",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-cheesetart-separa-montok.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-congo-bars",
    "categorySlug": "dessert",
    "name": "Congo Bars",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-congo-bars.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-congo-bars-2",
    "categorySlug": "dessert",
    "name": "Congo Bars",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-congo-bars-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-creampuff-custard",
    "categorySlug": "dessert",
    "name": "Creampuff Custard",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-creampuff-custard.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-creampuff-montok-creamy-custard",
    "categorySlug": "dessert",
    "name": "Creampuff montok creamy custard",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-creampuff-montok-creamy-custard.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-fruit-tart",
    "categorySlug": "dessert",
    "name": "Fruit Tart",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-fruit-tart.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-hokaido-cupcake-pandan-vanilla-red-velvet",
    "categorySlug": "dessert",
    "name": "Hokaido Cupcake -pandan Vanilla Red Velvet",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-hokaido-cupcake-pandan-vanilla-red-velvet.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-batik-choc",
    "categorySlug": "dessert",
    "name": "Kek batik choc",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-kek-batik-choc.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-batik-indulgence-8",
    "categorySlug": "dessert",
    "name": "Kek batik indulgence 8",
    "startingPriceRm": 65,
    "description": "From RM65.",
    "image": "/products/dessert/dessert-kek-batik-indulgence-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-choc-merelit",
    "categorySlug": "dessert",
    "name": "Kek choc merelit",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-kek-choc-merelit.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-pisang-cheese",
    "categorySlug": "dessert",
    "name": "Kek Pisang Cheese",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-kek-pisang-cheese.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-pisang-ori",
    "categorySlug": "dessert",
    "name": "Kek Pisang Ori",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-kek-pisang-ori.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-marble-klasik-butter-oren",
    "categorySlug": "dessert",
    "name": "Marble Klasik Butter Oren",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-marble-klasik-butter-oren.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-marble-klasik-butter-oren-2",
    "categorySlug": "dessert",
    "name": "Marble Klasik Butter Oren",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-marble-klasik-butter-oren-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-muffin-aneka-perisa",
    "categorySlug": "dessert",
    "name": "Muffin aneka perisa",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-muffin-aneka-perisa.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-nuttela-oat-bar",
    "categorySlug": "dessert",
    "name": "Nuttela oat bar",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-nuttela-oat-bar.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-nuttela-oat-bar-2",
    "categorySlug": "dessert",
    "name": "Nuttela oat bar",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-nuttela-oat-bar-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-puteri-ayu-choc-cheese",
    "categorySlug": "dessert",
    "name": "Puteri Ayu Choc Cheese",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-puteri-ayu-choc-cheese.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-slice-cake-bajet-pandan-gula-melaka-blueberry",
    "categorySlug": "dessert",
    "name": "Slice cake bajet (pandan gula melaka, blueberry",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-slice-cake-bajet-pandan-gula-melaka-blueberry.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-slice-cake-bajet-pandan-gula-melaka-blueberry-2",
    "categorySlug": "dessert",
    "name": "Slice cake bajet (pandan gula melaka, blueberry,",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-slice-cake-bajet-pandan-gula-melaka-blueberry-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-slice-cake-bajet-pandan-gula-melaka-blueberry-vanilla-oreo",
    "categorySlug": "dessert",
    "name": "Slice cake bajet (pandan gula melaka, blueberry, vanilla oreo",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-slice-cake-bajet-pandan-gula-melaka-blueberry-vanilla-oreo.webp",
    "hideSizeSelector": true
  },
  {
    "id": "double-premium-cake-choc-hazelnut",
    "categorySlug": "double-premium-cake",
    "name": "Choc Hazelnut",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-choc-hazelnut.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "double-premium-cake-choc-hazelnut-2",
    "categorySlug": "double-premium-cake",
    "name": "Choc Hazelnut",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-choc-hazelnut-2.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "double-premium-cake-cookies-and-cream",
    "categorySlug": "double-premium-cake",
    "name": "Cookies And Cream",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-cookies-and-cream.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "double-premium-cake-german-choc-size-8-rm130",
    "categorySlug": "double-premium-cake",
    "name": "GERMAN CHOC SIZE 8 rm130\"",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-german-choc-size-8-rm130.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "double-premium-cake-pandan-gula-melaka",
    "categorySlug": "double-premium-cake",
    "name": "Pandan Gula Melaka",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-pandan-gula-melaka.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "double-premium-cake-pandan-gula-melaka-2",
    "categorySlug": "double-premium-cake",
    "name": "Pandan Gula Melaka",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-pandan-gula-melaka-2.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "double-premium-cake-red-vampire-nut",
    "categorySlug": "double-premium-cake",
    "name": "Red Vampire Nut",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-red-vampire-nut.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "double-premium-cake-red-vampires-nut",
    "categorySlug": "double-premium-cake",
    "name": "Red Vampires Nut",
    "startingPriceRm": 130,
    "description": "Available sizes: 8\" RM130.",
    "image": "/products/double-premium-cake/double-premium-cake-red-vampires-nut.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 130
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "pavlova-cake-pavlova-cake",
    "categorySlug": "pavlova-cake",
    "name": "Pavlova Cake",
    "startingPriceRm": 75,
    "description": "Available sizes: 9\" RM75.",
    "image": "/products/pavlova-cake/pavlova-cake-pavlova-cake.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "9": 75
    },
    "availableSizesIn": [
      9
    ]
  },
  {
    "id": "premium-economy-cake-black-forest",
    "categorySlug": "premium-economy-cake",
    "name": "Black Forest",
    "startingPriceRm": 70,
    "description": "Available sizes: 7\" RM70, 9\" RM130.",
    "image": "/products/premium-economy-cake/premium-economy-cake-black-forest.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 70,
      "9": 130
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-carrot-cake",
    "categorySlug": "premium-economy-cake",
    "name": "Carrot Cake",
    "startingPriceRm": 70,
    "description": "Available sizes: 7\" RM70, 9\" RM130.",
    "image": "/products/premium-economy-cake/premium-economy-cake-carrot-cake.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 70,
      "9": 130
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-choc-indulgence",
    "categorySlug": "premium-economy-cake",
    "name": "Choc Indulgence",
    "startingPriceRm": 65,
    "description": "Available sizes: 7\" RM65, 9\" RM120.",
    "image": "/products/premium-economy-cake/premium-economy-cake-choc-indulgence.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 65,
      "9": 120
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-chocomello",
    "categorySlug": "premium-economy-cake",
    "name": "Chocomello",
    "startingPriceRm": 65,
    "description": "Available sizes: 7\" RM65, 9\" RM120.",
    "image": "/products/premium-economy-cake/premium-economy-cake-chocomello.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 65,
      "9": 120
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-devil-choc-cake",
    "categorySlug": "premium-economy-cake",
    "name": "Devil Choc Cake -",
    "startingPriceRm": 70,
    "description": "Available sizes: 7\" RM70, 9\" RM130.",
    "image": "/products/premium-economy-cake/premium-economy-cake-devil-choc-cake.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 70,
      "9": 130
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-laici-cake",
    "categorySlug": "premium-economy-cake",
    "name": "Laici Cake",
    "startingPriceRm": 65,
    "description": "Available sizes: 7\" RM65, 9\" RM120.",
    "image": "/products/premium-economy-cake/premium-economy-cake-laici-cake.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 65,
      "9": 120
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-mango-delight",
    "categorySlug": "premium-economy-cake",
    "name": "Mango Delight",
    "startingPriceRm": 70,
    "description": "Available sizes: 7\" RM70, 9\" RM130.",
    "image": "/products/premium-economy-cake/premium-economy-cake-mango-delight.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 70,
      "9": 130
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-red-velvet",
    "categorySlug": "premium-economy-cake",
    "name": "Red Velvet",
    "startingPriceRm": 70,
    "description": "Available sizes: 7\" RM70, 9\" RM130.",
    "image": "/products/premium-economy-cake/premium-economy-cake-red-velvet.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 70,
      "9": 130
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-victoria-sandwich",
    "categorySlug": "premium-economy-cake",
    "name": "Victoria Sandwich",
    "startingPriceRm": 70,
    "description": "Available sizes: 7\" RM70, 9\" RM130.",
    "image": "/products/premium-economy-cake/premium-economy-cake-victoria-sandwich.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 70,
      "9": 130
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-walnut-heaven-butterscotch",
    "categorySlug": "premium-economy-cake",
    "name": "Walnut Heaven Butterscotch",
    "startingPriceRm": 65,
    "description": "Available sizes: 7\" RM65, 9\" RM120.",
    "image": "/products/premium-economy-cake/premium-economy-cake-walnut-heaven-butterscotch.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 65,
      "9": 120
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "premium-economy-cake-walnut-heaven-butterscotch-2",
    "categorySlug": "premium-economy-cake",
    "name": "Walnut Heaven Butterscotch",
    "startingPriceRm": 65,
    "description": "Available sizes: 7\" RM65, 9\" RM120.",
    "image": "/products/premium-economy-cake/premium-economy-cake-walnut-heaven-butterscotch-2.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "7": 65,
      "9": 120
    },
    "availableSizesIn": [
      7,
      9
    ]
  },
  {
    "id": "snowy-cheese-snowy-cheese",
    "categorySlug": "snowy-cheese",
    "name": "Snowy Cheese",
    "startingPriceRm": 70,
    "description": "Available sizes: 8\" RM70.",
    "image": "/products/snowy-cheese/snowy-cheese-snowy-cheese.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 70
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "snowy-cheese-snowy-cheese-2",
    "categorySlug": "snowy-cheese",
    "name": "Snowy Cheese 2",
    "startingPriceRm": 70,
    "description": "Available sizes: 8\" RM70.",
    "image": "/products/snowy-cheese/snowy-cheese-snowy-cheese-2.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 70
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "snowy-cheese-snowy-cheese-3",
    "categorySlug": "snowy-cheese",
    "name": "Snowy Cheese 3",
    "startingPriceRm": 70,
    "description": "Available sizes: 8\" RM70.",
    "image": "/products/snowy-cheese/snowy-cheese-snowy-cheese-3.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 70
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-2",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 2",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-3",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 3",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-3.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-4",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 4",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-4.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-5",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 5",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-5.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-6",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 6",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-6.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-7",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 7",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-7.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-8",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 8",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-9",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 9",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-9.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-10",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 10",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-10.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-11",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 11",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-11.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-12",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 12",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-12.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-13",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 13",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-13.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-14",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 14",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-14.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-15",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 15",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-15.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-16",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 16",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-16.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-17",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 17",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-17.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-18",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 18",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-18.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-19",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 19",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-19.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-20",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 20",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-20.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-21",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 21",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-21.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-22",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 22",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-22.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-23",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 23",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-23.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-24",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 24",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-24.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-25",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 25",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-25.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-26",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 26",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-26.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-27",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 27",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-27.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-28",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 28",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-28.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-29",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 29",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-29.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-30",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 30",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-30.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-31",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 31",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-31.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-32",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 32",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-32.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-33",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 33",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-33.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-34",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 34",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-34.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-35",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 35",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-35.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-36",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 36",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-36.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-37",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 37",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-37.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-38",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 38",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-38.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-39",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 39",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-39.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-40",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 40",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-40.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-41",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 41",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-41.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-42",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 42",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-42.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-43",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 43",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-43.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-44",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 44",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-44.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-45",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 45",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-45.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-46",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 46",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-46.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-47",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 47",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-47.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-48",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 48",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-48.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-49",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 49",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-49.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-50",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 50",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-50.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-51",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 51",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-51.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-52",
    "categorySlug": "wedding-engagement-cake",
    "name": "Wedding-Engagement Cake 52",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-52.webp",
    "hideSizeSelector": true
  }
];

export const CAKE_PRODUCTS_BY_CATEGORY: Record<string, CakeProduct[]> = CAKE_PRODUCTS.reduce<
  Record<string, CakeProduct[]>
>((acc, p) => {
  (acc[p.categorySlug] ??= []).push(p);
  return acc;
}, {});

export function getCategoryBySlug(slug: string) {
  return CAKE_CATEGORIES.find((c) => c.slug === slug) ?? null;
}
