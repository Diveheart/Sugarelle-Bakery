import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Birthday Celebration",
    content:
      "The most beautiful and delicious cake I've ever ordered! My daughter's birthday was made extra special. The attention to detail was incredible.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Anniversary Order",
    content:
      "Ordered the Red Velvet Royale for our anniversary. It was absolutely divine! The cream cheese frosting was perfectly balanced. Will definitely order again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Roberts",
    role: "Regular Customer",
    content:
      "I've tried every cake on the menu, and each one is a masterpiece. The Salted Caramel Drip is my absolute favorite. Pure indulgence!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-fresh mb-4 inline-block">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their sweet experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-bakery p-6 md:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
