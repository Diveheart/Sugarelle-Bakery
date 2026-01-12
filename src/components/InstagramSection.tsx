import { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder images - replace with actual Instagram post images
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeCaramel from "@/assets/cake-caramel.jpg";
import cakeLemon from "@/assets/cake-lemon.jpg";

const instagramPosts = [
  { id: 1, image: cakeChocolate, alt: "Chocolate cake" },
  { id: 2, image: cakeVanilla, alt: "Vanilla cake" },
  { id: 3, image: cakeStrawberry, alt: "Strawberry cake" },
  { id: 4, image: cakeRedvelvet, alt: "Red velvet cake" },
  { id: 5, image: cakeCaramel, alt: "Caramel cake" },
  { id: 6, image: cakeLemon, alt: "Lemon cake" },
];

const InstagramSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="instagram" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground font-body text-lg">@sugarellebakery</p>
        </div>

        {/* Clean image grid (no cards / no carousel) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://instagram.com/sugarellebakery"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden rounded-lg bg-muted transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              aria-label="Open Instagram"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="https://instagram.com/sugarellebakery" target="_blank" rel="noopener noreferrer">
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-medium inline-flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

