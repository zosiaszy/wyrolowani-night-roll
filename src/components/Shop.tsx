import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

export function Shop() {
  return (
    <section id="shop" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
              Sklep <span className="text-accent">Wyrolowani</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oficjalny merch dla społeczności nightskaterów. Streetwear z neonowym charakterem.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:border-accent transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 animate-fade-in-up border-2 ring-1 ring-accent/30 hover:ring-accent/80 duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Link to={`/product/${product.id}`}>
                      <Button variant="secondary" size="lg" className="shadow-2xl font-semibold">
                        <Eye className="mr-2 h-5 w-5" />
                        Zobacz szczegóły
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-3xl font-bold text-primary">
                      {product.price} zł
                    </span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    {product.sizes.slice(0, 4).map((size) => (
                      <button 
                        key={size} 
                        className="flex-1 text-sm font-semibold px-4 py-3 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all border border-border hover:border-accent"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Link to={`/product/${product.id}`} className="w-full">
                    <Button size="lg" className="w-full group/btn font-bold text-base py-6 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)]">
                      <ShoppingCart className="mr-2 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                      Dodaj do koszyka
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 space-y-4 text-center animate-fade-in shadow-[var(--shadow-card)] ring-1 ring-primary/30">
            <h3 className="text-2xl font-semibold">Informacje o wysyłce</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wysyłka kurierem w 2-3 dni robocze. Bezpłatna dostawa przy zamówieniach powyżej 200 zł. 
              Zwroty i wymiany do 14 dni od otrzymania produktu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
