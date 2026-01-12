import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-blush/20 overflow-hidden"
    >
      <div className="container-custom max-w-4xl">
        {/* Centered Editorial Layout */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-12">
            About{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, hsl(350 45% 65%), hsl(38 70% 60%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sugarelle Bakery
            </span>
          </h2>

          {/* Subtle Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-12" />

          {/* Content with Editorial Typography */}
          <div className="space-y-8 text-muted-foreground text-lg md:text-xl leading-relaxed font-body">
            {/* Brand Attribution */}
            <div className="space-y-2">
              <p className="font-display text-2xl md:text-3xl text-foreground font-medium">
                Sugarelle Bakery by Arissa Ekin
              </p>
              <p className="font-accent text-xl md:text-2xl text-primary italic">
                formerly TomeiLittleOven
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-border mx-auto" />

            {/* Main Story */}
            <p>
              Sugarelle Bakery by Arissa Ekin was formerly known as TomeiLittleOven —
              <br className="hidden md:block" />
              a home bakery born from a love for baking and a belief that desserts should be made with intention, care, and heart.
            </p>

            <p>
              With over <strong className="text-foreground font-semibold">10 years of hands-on baking experience</strong>,
              <br className="hidden md:block" />
              our journey has been shaped by countless celebrations, trusted customers, and a continuous pursuit of refinement in both taste and craft.
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-border mx-auto" />

            <p>
              Sugarelle Bakery represents a refined evolution of that journey.
              <br className="hidden md:block" />
              While the name has changed, it is still created from the same kitchen,
              <br className="hidden md:block" />
              the same hands,
              <br className="hidden md:block" />
              and the same devotion to quality.
            </p>

            <p>
              Each cake and dessert is crafted in small batches,
              <br className="hidden md:block" />
              thoughtfully prepared,
              <br className="hidden md:block" />
              using carefully selected ingredients we trust and stand by.
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-border mx-auto" />

            <p className="italic text-foreground/80">
              This is not a departure from who we were.
              <br />
              It is a quieter, more considered expression of who we have become.
            </p>

            {/* Signature */}
            <p className="font-accent text-2xl md:text-3xl text-primary pt-4">
              — Arissa Ekin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
