import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import sugarelleLogo from "@/assets/sugarelle-logo.jpg";
// category dropdown removed; categories rendered as individual links

const categories = [
  { name: "Signature Cakes", path: "/signature-cakes" },
  { name: "Cheesecakes", path: "/cheesecakes" },
  { name: "Celebration Cakes", path: "/celebration-cakes" },
  { name: "Custom Cakes", path: "/custom-cakes" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Helper to choose link color: keep white on the homepage (unless scrolled),
  // but use foreground text on other pages so links are visible on white backgrounds.
  const linkColorClass = (extra = "") => {
    const base = "font-medium transition-colors";
    const color = !isHomePage
      ? "text-foreground hover:text-primary"
      : isScrolled
      ? "text-foreground hover:text-primary"
      : "text-white hover:text-white/80";
    return `${base} ${extra} ${color}`.trim();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-background shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src={sugarelleLogo}
            alt="Sugarelle Bakery"
            className="h-14 md:h-16 w-auto object-contain rounded-lg shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkColorClass()}>
            Home
          </Link>

          {/* Category links (moved from dropdown) */}
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={linkColorClass("px-3 py-2 rounded-full")}
            >
              {category.name}
            </Link>
          ))}

          <a
            href="https://wa.me/+917836903644"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-secondary"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-slide-up">
          <div className="container-custom py-6 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </Link>

            <div className="border-t border-border pt-4 mt-2">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white px-5 py-3 rounded-full text-sm font-medium text-center inline-flex items-center justify-center gap-2 mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
