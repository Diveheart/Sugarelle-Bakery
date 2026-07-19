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
    description: "Fluffy vanilla sponge with rich Lotus Biscoff cream and crunchy biscuit topping.",
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
    name: "Custom Cakes",
    description: "From elegant birthday cakes to bespoke celebration designs, each cake is thoughtfully crafted to bring your vision to life. Contact us for a personalized quotation and consultation.",
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
    description: "Made with premium ingredients, featuring rich chocolate moist cake or buttery vanilla cake layers, finished with our signature premium frosting.",
    startingPriceRm: 130,
  },
  {
    slug: "pavlova-cake",
    name: "Pavlova Cake",
    description: "Delicate meringue layered with luscious cream and fresh fruits, creating the perfect balance of sweetness and freshness.",
    startingPriceRm: 75,
  },
  {
    slug: "premium-economy-cake",
    name: "Premium Economy Cake",
    description: "Soft sponge cake layered with our signature cream, made with quality ingredients for every celebration.",
    startingPriceRm: 65,
  },
  {
    slug: "snowy-cheese",
    name: "Snowy Cheese Cake",
    description: "Soft cake topped with creamy cheese and delicate cheese flakes.",
    startingPriceRm: 70,
  },
  {
    slug: "wedding-engagement-cake",
    name: "Wedding & Engagement Cake",
    description: "Elegant cakes crafted for your special day. Starting from RM120. Contact us via WhatsApp for a personalized quotation and custom design consultation.",
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
    "id": "custom-cake-custom-cakes",
    "categorySlug": "custom-cake",
    "name": "Dreamy Bunny Castle",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-2",
    "categorySlug": "custom-cake",
    "name": "Kuromi And Melody",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-3",
    "categorySlug": "custom-cake",
    "name": "Spider Man Hero",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-3.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-4",
    "categorySlug": "custom-cake",
    "name": "Thomas And Friends",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-4.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-5",
    "categorySlug": "custom-cake",
    "name": "Construction Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-5.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-6",
    "categorySlug": "custom-cake",
    "name": "Blackpink Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-6.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-7",
    "categorySlug": "custom-cake",
    "name": "Didi And Friends Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-7.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-8",
    "categorySlug": "custom-cake",
    "name": "Baby Riki Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-9",
    "categorySlug": "custom-cake",
    "name": "Elsa Frozen Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-9.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-10",
    "categorySlug": "custom-cake",
    "name": "Frozen Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-10.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-11",
    "categorySlug": "custom-cake",
    "name": "Sweet Kitty Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-11.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-12",
    "categorySlug": "custom-cake",
    "name": "Frozen Magic Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-12.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-13",
    "categorySlug": "custom-cake",
    "name": "Mermaid Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-13.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-14",
    "categorySlug": "custom-cake",
    "name": "Frozen Winter Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-14.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-15",
    "categorySlug": "custom-cake",
    "name": "F1 Racing Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-15.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-16",
    "categorySlug": "custom-cake",
    "name": "Chocomelon Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-16.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-17",
    "categorySlug": "custom-cake",
    "name": "Elsa Snow Queen Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-17.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-18",
    "categorySlug": "custom-cake",
    "name": "Doraemon Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-18.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-19",
    "categorySlug": "custom-cake",
    "name": "Football Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-19.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-20",
    "categorySlug": "custom-cake",
    "name": "Princess Diary Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-20.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-21",
    "categorySlug": "custom-cake",
    "name": "Helloo Kitty Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-21.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-22",
    "categorySlug": "custom-cake",
    "name": "Hello Kitty Dream Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-22.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-23",
    "categorySlug": "custom-cake",
    "name": "Double Theme Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-23.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-24",
    "categorySlug": "custom-cake",
    "name": "Cute Hello Kitty Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-24.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-25",
    "categorySlug": "custom-cake",
    "name": "Among Us Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-25.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-26",
    "categorySlug": "custom-cake",
    "name": "Mickey Mouse Clubhouse Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-26.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-27",
    "categorySlug": "custom-cake",
    "name": "Didi And Friends Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-27.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-28",
    "categorySlug": "custom-cake",
    "name": "Pink Kitty Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-28.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-29",
    "categorySlug": "custom-cake",
    "name": "Meow Meow Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-29.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-30",
    "categorySlug": "custom-cake",
    "name": "Mickey Mouse Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-30.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-31",
    "categorySlug": "custom-cake",
    "name": "Cute Meow Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-31.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-32",
    "categorySlug": "custom-cake",
    "name": "Hello Kitty Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-32.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-33",
    "categorySlug": "custom-cake",
    "name": "Hello Kitty Theme",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-33.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-34",
    "categorySlug": "custom-cake",
    "name": "Double Character Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-34.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-35",
    "categorySlug": "custom-cake",
    "name": "Pandas Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-35.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-36",
    "categorySlug": "custom-cake",
    "name": "Pink Kitty Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-36.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-37",
    "categorySlug": "custom-cake",
    "name": "Kitty Blossom Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-37.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-38",
    "categorySlug": "custom-cake",
    "name": "Kitty Bow Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-38.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-39",
    "categorySlug": "custom-cake",
    "name": "Didi Fun Time Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-39.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-40",
    "categorySlug": "custom-cake",
    "name": "Bts Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-40.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-41",
    "categorySlug": "custom-cake",
    "name": "Fishing Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-41.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-42",
    "categorySlug": "custom-cake",
    "name": "Unicorn Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-42.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-43",
    "categorySlug": "custom-cake",
    "name": "Barbie Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-43.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-44",
    "categorySlug": "custom-cake",
    "name": "Sleeping Bunny Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-44.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-45",
    "categorySlug": "custom-cake",
    "name": "Kitty Cutie Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-45.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-46",
    "categorySlug": "custom-cake",
    "name": "Floral Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-46.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-47",
    "categorySlug": "custom-cake",
    "name": "Firefighters Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-47.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-48",
    "categorySlug": "custom-cake",
    "name": "Spiderman Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-48.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-49",
    "categorySlug": "custom-cake",
    "name": "Frozen Wonderland Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-49.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-50",
    "categorySlug": "custom-cake",
    "name": "Ultraman Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-50.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-51",
    "categorySlug": "custom-cake",
    "name": "Mcqueen Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-51.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-52",
    "categorySlug": "custom-cake",
    "name": "Spiderman Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-52.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-53",
    "categorySlug": "custom-cake",
    "name": "Batman Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-53.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-54",
    "categorySlug": "custom-cake",
    "name": "Roblox Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-54.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-55",
    "categorySlug": "custom-cake",
    "name": "Little Pony Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-55.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-56",
    "categorySlug": "custom-cake",
    "name": "Magical Unicorn Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-56.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-57",
    "categorySlug": "custom-cake",
    "name": "Princess Sofia Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-57.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-58",
    "categorySlug": "custom-cake",
    "name": "2 In1 Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-58.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-59",
    "categorySlug": "custom-cake",
    "name": "2 In1 Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-59.webp",
    "hideSizeSelector": true
  },
  {
    "id": "custom-cake-custom-cakes-60",
    "categorySlug": "custom-cake",
    "name": "Roblox Theme Cake",
    "startingPriceRm": 55,
    "description": "From RM55. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/custom-cake/custom-cake-custom-cakes-60.webp",
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
    "name": "Assorted Sandwich",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-assorted-sandwich.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-assorted-sandwich-2",
    "categorySlug": "dessert",
    "name": "Assorted Sandwich",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-assorted-sandwich-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-brownies-choc-8",
    "categorySlug": "dessert",
    "name": "Brownies Choc 8",
    "startingPriceRm": 38,
    "description": "From RM38.",
    "image": "/products/dessert/dessert-brownies-choc-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-brownies-choc-8-2",
    "categorySlug": "dessert",
    "name": "Brownies Choc 8",
    "startingPriceRm": 38,
    "description": "From RM38.",
    "image": "/products/dessert/dessert-brownies-choc-8-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-cheesetart-bajet",
    "categorySlug": "dessert",
    "name": "Cheesetart Bajet",
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
    "name": "Cheesetart Separa Montok",
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
    "name": "Creampuff Montok Creamy Custard",
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
    "name": "Hokaido Cupcake Pandan Vanilla Red Velvet",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-hokaido-cupcake-pandan-vanilla-red-velvet.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-batik-choc",
    "categorySlug": "dessert",
    "name": "Kek Batik Choc",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-kek-batik-choc.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-batik-indulgence-8",
    "categorySlug": "dessert",
    "name": "Kek Batik Indulgence 8",
    "startingPriceRm": 65,
    "description": "From RM65.",
    "image": "/products/dessert/dessert-kek-batik-indulgence-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-kek-choc-merelit",
    "categorySlug": "dessert",
    "name": "Kek Choc Merelit",
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
    "name": "Muffin Aneka Perisa",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-muffin-aneka-perisa.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-nuttela-oat-bar",
    "categorySlug": "dessert",
    "name": "Nuttela Oat Bar",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-nuttela-oat-bar.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-nuttela-oat-bar-2",
    "categorySlug": "dessert",
    "name": "Nuttela Oat Bar",
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
    "name": "Slice Cake Bajet (pandan Gula Melaka, Blueberry",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-slice-cake-bajet-pandan-gula-melaka-blueberry.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-slice-cake-bajet-pandan-gula-melaka-blueberry-2",
    "categorySlug": "dessert",
    "name": "Slice Cake Bajet (pandan Gula Melaka, Blueberry,",
    "startingPriceRm": 25,
    "description": "From RM25.",
    "image": "/products/dessert/dessert-slice-cake-bajet-pandan-gula-melaka-blueberry-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "dessert-slice-cake-bajet-pandan-gula-melaka-blueberry-vanilla-oreo",
    "categorySlug": "dessert",
    "name": "Slice Cake Bajet (pandan Gula Melaka, Blueberry, Vanilla Oreo",
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
    "name": "German Choc Size 8 Rm130\"",
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
    "name": "Devil Choc Cake",
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
    "id": "snowy-cheese-snowy-cheese-cake",
    "categorySlug": "snowy-cheese",
    "name": "Snowy Cheese Cake",
    "startingPriceRm": 70,
    "description": "Available sizes: 8\" RM70.",
    "image": "/products/snowy-cheese/snowy-cheese-snowy-cheese-cake.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 70
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "snowy-cheese-snowy-cheese-cake-2",
    "categorySlug": "snowy-cheese",
    "name": "Snowy Cheese Cake 2",
    "startingPriceRm": 70,
    "description": "Available sizes: 8\" RM70.",
    "image": "/products/snowy-cheese/snowy-cheese-snowy-cheese-cake-2.webp",
    "hideSizeSelector": false,
    "priceBySizeRm": {
      "8": 70
    },
    "availableSizesIn": [
      8
    ]
  },
  {
    "id": "snowy-cheese-snowy-cheese-cake-3",
    "categorySlug": "snowy-cheese",
    "name": "Snowy Cheese Cake 3",
    "startingPriceRm": 70,
    "description": "Available sizes: 8\" RM70.",
    "image": "/products/snowy-cheese/snowy-cheese-snowy-cheese-cake-3.webp",
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
    "name": "The Signature",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-2",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Royale",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-2.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-3",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Prestige",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-3.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-4",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Grande",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-4.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-5",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Harmony",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-5.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-6",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Serenity",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-6.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-7",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Essence",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-7.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-8",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Majesty",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-8.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-9",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Legacy",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-9.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-10",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Eternal",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-10.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-11",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Promise",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-11.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-12",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Forever",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-12.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-13",
    "categorySlug": "wedding-engagement-cake",
    "name": "The One",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-13.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-14",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Beginning",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-14.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-15",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Devotion",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-15.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-16",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Unity",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-16.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-17",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Bliss",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-17.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-18",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Elegance",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-18.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-19",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Dream",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-19.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-20",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Grace",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-20.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-21",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Infinity",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-21.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-22",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Cherish",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-22.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-23",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Timeless",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-23.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-24",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Luxe",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-24.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-25",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Pearl",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-25.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-26",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Ivory",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-26.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-27",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Crown",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-27.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-28",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Vow",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-28.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-29",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Romance",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-29.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-30",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Evermore",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-30.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-31",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Celebration",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-31.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-32",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Enchant",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-32.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-33",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Beloved",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-33.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-34",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Promise Ii",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-34.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-35",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Heirloom",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-35.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-36",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Finest",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-36.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-37",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Noble",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-37.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-38",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Pure",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-38.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-39",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Radiance",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-39.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-40",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Splendor",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-40.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-41",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Keepsake",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-41.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-42",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Empress",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-42.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-43",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Imperial",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-43.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-44",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Monarch",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-44.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-45",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Elite",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-45.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-46",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Velvet",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-46.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-47",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Muse",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-47.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-48",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Aurora",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-48.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-49",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Infinity Luxe",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-49.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-50",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Grand Affair",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-50.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-51",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Everlasting",
    "startingPriceRm": 120,
    "description": "From RM120. Contact us on WhatsApp for sizing and custom quotes.",
    "image": "/products/wedding-engagement-cake/wedding-engagement-cake-wedding-engagement-cake-51.webp",
    "hideSizeSelector": true
  },
  {
    "id": "wedding-engagement-cake-wedding-engagement-cake-52",
    "categorySlug": "wedding-engagement-cake",
    "name": "The Masterpiece",
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
