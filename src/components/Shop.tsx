import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const EXTERNAL_SHOP_URL = 'https://wyrolowani.cyberstores.pl/';

export function Shop() {
  return (
    <section id="shop" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
              <span className="italic text-primary">Sklep</span>{' '}
              <span className="font-bold">Wyrolowani</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Oficjalny merch dla społeczności nightskaterów. Streetwear z neonowym charakterem.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <a 
                key={product.id}
                href={EXTERNAL_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Product Info */}
                <h3 className="text-base font-semibold text-primary group-hover:text-primary/80 transition-colors mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {product.description.slice(0, 50)}...
                </p>
                <span className="text-base font-bold text-primary">
                  {product.price} zł
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center pt-4">
            <a href={EXTERNAL_SHOP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8">
                Zobacz pełną ofertę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
