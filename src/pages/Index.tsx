import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CakeMenu from "@/components/CakeMenu";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CakeMenu />
      <CustomerReviews />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
