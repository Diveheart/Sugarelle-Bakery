import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Parallax Background with blur and strong overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: "blur(2px) brightness(0.6) saturate(0.8)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Badge */}
          <div
            className="animate-fade-up opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="badge-fresh mb-6 inline-block">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Made Fresh to Order
            </span>
          </div>

          {/* Headline */}
          <div
            className="animate-fade-up opacity-0 animation-delay-100 space-y-4"
            style={{ animationFillMode: "forwards" }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl">
              Handcrafted Cakes
            </h1>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-200 drop-shadow-lg">
              Made With Care
            </p>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-white/90 tracking-wide">
              by Sugarelle Bakery
            </p>
          </div>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-body leading-relaxed animate-fade-up opacity-0 animation-delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Indulge in our artisan cakes, thoughtfully crafted in small batches
            using carefully selected ingredients, where every detail is baked
            with care and served from the heart.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-up opacity-0 animation-delay-300 pt-4 flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationFillMode: "forwards" }}
          >
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="btn-primary text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-body font-semibold"
            >
              View Our Cakes
            </Button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="whatsapp-btn text-white text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-body font-semibold inline-flex items-center gap-2 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to menu"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
