import { useEffect, useRef, useState } from "react";
import CakeCard, { Cake } from "./CakeCard";
import { CAKE_CATEGORIES, CAKE_PRODUCTS } from "@/data/cake-catalog";

type CakeMenuItem = Cake & { categorySlug: string };

export const cakes: CakeMenuItem[] = CAKE_PRODUCTS.map((p) => ({
  id: p.id,
  categorySlug: p.categorySlug,
  name: p.name,
  description: p.description,
  price: p.startingPriceRm,
  priceBySizeRm: p.priceBySizeRm,
  image: p.image,
}));

const CakeMenu = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCakes =
    selectedCategory === "all"
      ? cakes
      : cakes.filter((cake) => cake.categorySlug === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-cake-id");
            if (id) {
              setVisibleCards((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-fresh mb-4 inline-block">Our Collection</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Discover Our Cakes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each cake is handcrafted with love, using only the finest ingredients. Choose your favorites and order via WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-primary text-white"
                : "bg-background text-foreground hover:bg-muted"
            }`}
          >
            All Cakes
          </button>
          {CAKE_CATEGORIES.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.slug
                  ? "bg-primary text-white"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCakes.map((cake, index) => (
            <div
              key={cake.id}
              ref={(el) => {
                if (el) cardRefs.current.set(cake.id, el);
              }}
              data-cake-id={cake.id}
              className={`transition-all duration-700 ${
                visibleCards.has(cake.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CakeCard cake={cake} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeMenu;
