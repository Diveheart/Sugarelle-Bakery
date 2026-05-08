import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import sugarelleLogo from "@/assets/sugarelle-logo.jpg";
import { CAKE_CATEGORIES } from "@/data/cake-catalog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = CAKE_CATEGORIES.map((c) => ({ name: c.name, path: `/${c.slug}` }));

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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={linkColorClass("px-3 py-2 rounded-full inline-flex items-center gap-1")}
              >
                Cake Category
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {categories.map((category) => (
                <DropdownMenuItem key={category.path} asChild>
                  <Link to={category.path}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="https://wa.me/+60137843707"
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
          className="md:hidden px-3 py-2 rounded-full flex items-center gap-2 bg-secondary"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
          <span className="text-sm font-medium text-foreground">Menu</span>
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
              <p className="text-sm font-semibold text-foreground/80 mb-2">Cake Category</p>
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
              href="https://wa.me/+60137843707"
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
