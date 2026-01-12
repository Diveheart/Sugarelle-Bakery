import { useEffect, useRef, useState } from "react";
import CakeCard, { Cake } from "./CakeCard";

// Import cake images
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeCaramel from "@/assets/cake-caramel.jpg";
import cakeLemon from "@/assets/cake-lemon.jpg";

export const cakes: Cake[] = [
  {
    id: "chocolate-dream",
    name: "Chocolate Dream",
    description: "Rich dark chocolate layers with silky ganache and chocolate curls. A chocolate lover's paradise.",
    price: 45,
    image: cakeChocolate,
  },
  {
    id: "strawberry-bliss",
    name: "Strawberry Bliss",
    description: "Light vanilla sponge with fresh strawberries and whipped cream. Summer in every bite.",
    price: 42,
    image: cakeStrawberry,
  },
  {
    id: "red-velvet-royale",
    name: "Red Velvet Royale",
    description: "Classic red velvet with cream cheese frosting. Elegant, velvety, and utterly delicious.",
    price: 48,
    image: cakeRedvelvet,
  },
  {
    id: "vanilla-celebration",
    name: "Vanilla Celebration",
    description: "Classic vanilla buttercream cake with festive sprinkles. Perfect for any celebration.",
    price: 38,
    image: cakeVanilla,
  },
  {
    id: "salted-caramel",
    name: "Salted Caramel Drip",
    description: "Buttery caramel drip cake with salted caramel popcorn. Sweet, salty, perfection.",
    price: 52,
    image: cakeCaramel,
  },
  {
    id: "lemon-sunshine",
    name: "Lemon Sunshine",
    description: "Zesty lemon cake with lemon curd and edible flowers. Bright and refreshing.",
    price: 44,
    image: cakeLemon,
  },
];

const CakeMenu = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

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

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cakes.map((cake, index) => (
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
