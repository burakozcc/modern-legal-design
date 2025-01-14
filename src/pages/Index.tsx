import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import ServiceButtons from "@/components/ServiceButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Header />
      <main>
        <ImageCarousel />
        <ServiceButtons />
      </main>
      <Footer />
    </div>
  );
};

export default Index;