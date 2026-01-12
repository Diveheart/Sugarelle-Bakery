import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    text: "Absolutely loved the cake! Fresh and delicious.",
    date: "09/01/2026",
  },
  {
    id: 2,
    name: "Ahmad R.",
    text: "Beautiful design and amazing taste. Will definitely order again.",
    date: "07/01/2026",
  },
  {
    id: 3,
    name: "Lisa T.",
    text: "Highly recommend Sugarelle Bakery!",
    date: "05/01/2026",
  },
  {
    id: 4,
    name: "David K.",
    text: "The cake was a hit at our office party — everyone asked where it was from.",
    date: "03/01/2026",
  },
  {
    id: 5,
    name: "Nurul A.",
    text: "Always fresh, always beautiful. Never disappointed.",
    date: "01/01/2026",
  },
];

const CustomerReviews = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

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

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 3500);
    return () => window.clearInterval(id);
  }, [emblaApi, paused]);

  const StarRating = () => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`flex items-end justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center md:text-left flex-1">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <StarRating />
              <span className="text-muted-foreground text-sm ml-2">
                from 500+ reviews
              </span>
            </div>
          </div>

          {/* Arrows (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="h-10 w-10 rounded-full border border-border bg-background hover:bg-accent inline-flex items-center justify-center"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="h-10 w-10 rounded-full border border-border bg-background hover:bg-accent inline-flex items-center justify-center"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={emblaRef}
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="flex -ml-4">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="pl-4 flex-[0_0_88%] sm:flex-[0_0_52%] md:flex-[0_0_33.333%]"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <ReviewCard review={review} isVisible={isVisible} delay={0} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows (mobile) */}
          <div className="mt-6 flex md:hidden items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="h-10 w-10 rounded-full border border-border bg-background hover:bg-accent inline-flex items-center justify-center"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="h-10 w-10 rounded-full border border-border bg-background hover:bg-accent inline-flex items-center justify-center"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    text: string;
    date: string;
  };
  isVisible: boolean;
  delay: number;
}

const ReviewCard = ({ review, isVisible }: ReviewCardProps) => {
  return (
    <div
      className={`bg-card border border-border/40 rounded-xl p-6 transition-all duration-700 shadow-sm hover:shadow-md ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="font-body text-foreground text-base leading-relaxed mb-6">
        "{review.text}"
      </p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-body font-semibold text-foreground text-sm">
            {review.name}
          </p>
          <p className="text-muted-foreground text-xs">via WhatsApp</p>
        </div>
        <p className="text-muted-foreground text-xs">{review.date}</p>
      </div>
    </div>
  );
};

export default CustomerReviews;
