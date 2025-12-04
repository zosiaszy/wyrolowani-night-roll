import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Zdjęcia produktów
import hoodieWhiteImg from '@/assets/product-hoodie-white.jpg';
import hoodieBlackImg from '@/assets/product-hoodie-black.jpg';
import tshirtWhiteImg from '@/assets/product-tshirt-white.jpg';
import tshirtBlackImg from '@/assets/product-tshirt-black.jpg';

const EXTERNAL_SHOP_URL = 'https://wyrolowani.cyberstores.pl/';
const HOODIES_URL = 'https://wyrolowani.cyberstores.pl/kategoria-produktu/bluzy/';
const TSHIRTS_URL = 'https://wyrolowani.cyberstores.pl/kategoria-produktu/koszulki/';

const hoodies = [
  {
    id: 'hoodie-white',
    name: 'Bluza Wyrolowani Biała',
    price: 189,
    image: hoodieWhiteImg,
    categoryUrl: HOODIES_URL,
  },
  {
    id: 'hoodie-black',
    name: 'Bluza Wyrolowani Czarna',
    price: 189,
    image: hoodieBlackImg,
    categoryUrl: HOODIES_URL,
  },
];

const tshirts = [
  {
    id: 'tshirt-white',
    name: 'Koszulka Wyrolowani Biała',
    price: 99,
    image: tshirtWhiteImg,
    categoryUrl: TSHIRTS_URL,
  },
  {
    id: 'tshirt-black',
    name: 'Koszulka Wyrolowani Czarna',
    price: 99,
    image: tshirtBlackImg,
    categoryUrl: TSHIRTS_URL,
  },
];

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    categoryUrl: string;
  };
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div
      className="group animate-fade-in-up border border-primary/20 rounded-lg p-3 md:p-4 hover:border-primary/50 transition-all duration-300"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: '0 0 15px hsl(var(--primary) / 0.1)'
      }}
    >
      {/* Product Image */}
      <div className="aspect-[4/5] overflow-hidden rounded-lg mb-3 md:mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Product Info */}
      <h4 className="text-sm md:text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors mb-2 text-glow line-clamp-2">
        {product.name}
      </h4>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-lg md:text-xl font-bold text-primary">
          {product.price} zł
        </span>
        <a href={product.categoryUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="text-glow w-full sm:w-auto text-sm py-2">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Kup teraz
          </Button>
        </a>
      </div>
    </div>
  );
}

export function Shop() {
  return (
    <section id="shop" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              <span className="italic text-primary">Sklep</span>{' '}
              <span>Wyrolowani</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto text-glow px-4">
              Oficjalny merch dla społeczności nightskaterów. Streetwear z neonowym charakterem.
            </p>
          </div>

          {/* Bluzy Category */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-primary text-glow">
                Bluzy
              </h3>
              <a href={HOODIES_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary text-glow text-xs md:text-sm">
                  <span className="hidden sm:inline">Zobacz wszystkie</span>
                  <span className="sm:hidden">Więcej</span>
                  <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </a>
            </div>
            {/* 1 column on mobile, 2 on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {hoodies.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>

          {/* Koszulki Category */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-primary text-glow">
                Koszulki
              </h3>
              <a href={TSHIRTS_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary text-glow text-xs md:text-sm">
                  <span className="hidden sm:inline">Zobacz wszystkie</span>
                  <span className="sm:hidden">Więcej</span>
                  <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </a>
            </div>
            {/* 1 column on mobile, 2 on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {tshirts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center pt-2 md:pt-4">
            <a href={EXTERNAL_SHOP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-6 md:px-8 text-glow text-sm md:text-base">
                Zobacz pełną ofertę
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
