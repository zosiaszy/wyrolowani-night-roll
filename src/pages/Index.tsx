import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Shop } from '@/components/Shop';
import { Events } from '@/components/Events';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Shop />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
