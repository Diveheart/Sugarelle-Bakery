import { useEffect, useRef, useState } from "react";
import sugarelleLogo from "@/assets/sugarelle-logo.jpg";
import heroImg from "@/assets/hero-bakery.jpg";
import bakeloveImg from "@/assets/bake-with-love.svg";
import bakelady from "@/assets/baking lady.png";

const HighlightsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="container-custom max-w-6xl">
        <div
          className={`transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Row 1: Text left on md+, image right on md+; image first on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                The Perfect Cake?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
                We're a team of professional chefs, with the goal of
                creating a perfectly balanced cake. Join us on our journey of
                discovery and self-improvement.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-lg">
                <img
                  src={bakeloveImg}
                  alt="illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 2: image left, text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-1 flex justify-center md:justify-start">
              <div className="w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-lg md:mr-8">
                <img src={bakelady} alt="illustration" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="order-2 md:order-2 text-center md:text-left md:pl-6">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                Cake Happiness Guarantee
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
                Every cake is thoughtfully crafted with care and attention to detail. If your cake arrives damaged or does not meet your expectations in taste or appearance, please let us know and we will be happy to assist in making it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
