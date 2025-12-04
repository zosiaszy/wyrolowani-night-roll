import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
    description: 'Wygodna bluza z kapturem, idealna na nocne przejazdy',
    price: 189,
    image: hoodieWhiteImg,
    categoryUrl: HOODIES_URL,
  },
  {
    id: 'hoodie-black',
    name: 'Bluza Wyrolowani Czarna',
    description: 'Klasyczna czerń z charakterem nightskatera',
    price: 189,
    image: hoodieBlackImg,
    categoryUrl: HOODIES_URL,
  },
];

const tshirts = [
  {
    id: 'tshirt-white',
    name: 'Koszulka Wyrolowani Biała',
    description: 'Lekka koszulka na letnie rolkowanie',
    price: 99,
    image: tshirtWhiteImg,
    categoryUrl: TSHIRTS_URL,
  },
  {
    id: 'tshirt-black',
    name: 'Koszulka Wyrolowani Czarna',
    description: 'Streetwearowy styl dla prawdziwych rolkarzy',
    price: 99,
    image: tshirtBlackImg,
    categoryUrl: TSHIRTS_URL,
  },
];

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryUrl: string;
  };
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div
      className="group animate-fade-in-up border border-primary/20 rounded-xl p-4 md:p-5 hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: '0 0 20px hsl(var(--primary) / 0.15)'
      }}
    >
      {/* Product Image */}
      <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Product Info - Centered */}
      <div className="text-center space-y-3">
        <h4 className="text-base md:text-lg font-bold text-primary group-hover:text-primary/80 transition-colors text-glow">
          {product.name}
        </h4>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>
        
        <p className="text-xl md:text-2xl font-bold text-primary">
          {product.price} zł
        </p>
        
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <a 
                href={product.categoryUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full text-base md:text-lg font-bold py-6 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Kup teraz
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent 
              side="top" 
              className="bg-primary text-primary-foreground border-primary px-4 py-2"
            >
              <p className="flex items-center gap-2 font-medium">
                <Sparkles className="h-4 w-4" />
                Dołącz do ekipy Wyrolowani!
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export function Shop() {
  return (
    <section id="shop" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
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
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-primary text-glow">
                Bluzy
              </h3>
              <a href={HOODIES_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary text-glow text-xs">
                  <span className="hidden sm:inline">Zobacz wszystkie</span>
                  <span className="sm:hidden">Więcej</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {hoodies.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>

          {/* Koszulki Category */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-primary text-glow">
                Koszulki
              </h3>
              <a href={TSHIRTS_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary text-glow text-xs">
                  <span className="hidden sm:inline">Zobacz wszystkie</span>
                  <span className="sm:hidden">Więcej</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
