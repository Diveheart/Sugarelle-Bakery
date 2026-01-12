import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard, { Cake } from "@/components/CakeCard";

// Import cake images (placeholders)
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeCaramel from "@/assets/cake-caramel.jpg";
import cakeLemon from "@/assets/cake-lemon.jpg";

interface CategoryData {
  title: string;
  description: string;
  products: Cake[];
}

const categoryData: Record<string, CategoryData> = {
  "signature-cakes": {
    title: "Signature Cakes",
    description: "Our most beloved creations, crafted with premium ingredients and artistic flair.",
    products: [
      {
        id: "chocolate-dream",
        name: "Chocolate Dream",
        description: "Rich dark chocolate layers with silky ganache and chocolate curls.",
        price: 85,
        image: cakeChocolate,
      },
      {
        id: "red-velvet-royale",
        name: "Red Velvet Royale",
        description: "Classic red velvet with cream cheese frosting. Elegant and velvety.",
        price: 90,
        image: cakeRedvelvet,
      },
      {
        id: "salted-caramel-drip",
        name: "Salted Caramel Drip",
        description: "Buttery caramel drip cake with salted caramel popcorn. Sweet perfection.",
        price: 95,
        image: cakeCaramel,
      },
    ],
  },
  cheesecakes: {
    title: "Cheesecakes",
    description: "Creamy, indulgent cheesecakes in a variety of flavors.",
    products: [
      {
        id: "classic-ny-cheesecake",
        name: "Classic NY Cheesecake",
        description: "Traditional New York style with graham cracker crust.",
        price: 75,
        image: cakeVanilla,
      },
      {
        id: "strawberry-cheesecake",
        name: "Strawberry Cheesecake",
        description: "Creamy cheesecake topped with fresh strawberry compote.",
        price: 80,
        image: cakeStrawberry,
      },
      {
        id: "chocolate-cheesecake",
        name: "Chocolate Cheesecake",
        description: "Rich chocolate cheesecake with Oreo cookie base.",
        price: 85,
        image: cakeChocolate,
      },
    ],
  },
  "celebration-cakes": {
    title: "Celebration Cakes",
    description: "Perfect for birthdays, anniversaries, and every sweet milestone.",
    products: [
      {
        id: "vanilla-celebration",
        name: "Vanilla Celebration",
        description: "Classic vanilla buttercream cake with festive sprinkles.",
        price: 88,
        image: cakeVanilla,
      },
      {
        id: "strawberry-bliss",
        name: "Strawberry Bliss",
        description: "Light vanilla sponge with fresh strawberries and whipped cream.",
        price: 92,
        image: cakeStrawberry,
      },
      {
        id: "lemon-sunshine",
        name: "Lemon Sunshine",
        description: "Zesty lemon cake with lemon curd and edible flowers.",
        price: 90,
        image: cakeLemon,
      },
    ],
  },
  "custom-cakes": {
    title: "Custom Cakes",
    description: "Personalized cakes designed for your special occasions.",
    products: [
      {
        id: "birthday-custom",
        name: "Birthday Celebration",
        description: "Custom designed birthday cake with your choice of flavors and decorations.",
        price: 120,
        image: cakeVanilla,
      },
      {
        id: "wedding-tier",
        name: "Wedding Tier Cake",
        description: "Elegant multi-tier cake, fully customizable to your theme.",
        price: 350,
        image: cakeCaramel,
      },
      {
        id: "anniversary-special",
        name: "Anniversary Special",
        description: "Romantic cake design perfect for celebrating years of love.",
        price: 150,
        image: cakeRedvelvet,
      },
    ],
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-40 pb-20 container-custom text-center">
          <h1 className="font-display text-4xl font-semibold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary px-6 py-3 rounded-full inline-block">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-secondary/30">
        <div className="container-custom">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">{data.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{data.description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.products.map((product) => (
              <CakeCard key={product.id} cake={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We'd love to create something special just for you. Contact us on WhatsApp to discuss your custom order.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi%20Sugarelle%20Bakery!%20I%20have%20a%20custom%20order%20request."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="whatsapp-btn text-white rounded-full px-8 py-6 text-lg inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Enquire on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
