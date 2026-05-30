import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import { CAKE_PRODUCTS_BY_CATEGORY, getCategoryBySlug } from "@/data/cake-catalog";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const cat = category ? getCategoryBySlug(category) : null;
  const products = category ? CAKE_PRODUCTS_BY_CATEGORY[category] ?? [] : [];

  if (!cat) {
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
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">{cat.name}</h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {products.map((product) => (
              <CakeCard
                key={product.id}
                cake={{
                  id: product.id,
                  categorySlug: product.categorySlug,
                  name: product.name,
                  description: product.description,
                  price: product.startingPriceRm,
                  priceBySizeRm: product.priceBySizeRm,
                  availableSizesIn: product.availableSizesIn,
                  hideSizeSelector: product.hideSizeSelector,
                  image: product.image,
                }}
              />
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
            href="https://wa.me/+60137843707?text=Hi%20Sugarelle%20Bakery!%20I%20have%20a%20custom%20order%20request."
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
