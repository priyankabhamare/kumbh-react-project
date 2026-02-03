import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import NewsSection from "@/components/news-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
