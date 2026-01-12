import { Instagram, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import sugarelleLogo from "@/assets/sugarelle-logo.jpg";

const categories = [
  { name: "Signature Cakes", path: "/signature-cakes" },
  { name: "Cheesecakes", path: "/cheesecakes" },
  { name: "Custom Cakes", path: "/custom-cakes" },
  { name: "Cupcakes", path: "/cupcakes" },
  { name: "Desserts", path: "/desserts" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={sugarelleLogo} 
              alt="Sugarelle Bakery" 
              className="h-20 md:h-24 w-auto object-contain mb-4 rounded-lg shadow-md"
            />
            <p className="text-background/70 mb-6 font-body">
              Baked with care. Served with heart.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/sugarellebakery" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#25D366] transition-colors" 
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link 
                    to={category.path} 
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-background/70 hover:text-primary transition-colors">
                  Our Cakes
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-background/70 hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-background/70 hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-background/70 mb-4">
              Ready to order? Send us a message on WhatsApp and we'll get back to you within hours.
            </p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">© 2026 Sugarelle Bakery. All rights reserved.</p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> from our kitchen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
