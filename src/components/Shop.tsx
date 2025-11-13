import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

export function Shop() {
  return (
    <section id="shop" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sklep <span className="text-accent">Wyrolowani</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oficjalny merch dla społeczności nightskaterów. Streetwear z neonowym charakterem.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:border-accent transition-all hover:shadow-[var(--shadow-card)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Link to={`/product/${product.id}`}>
                      <Button variant="secondary" size="sm" className="shadow-lg">
                        <Eye className="mr-2 h-4 w-4" />
                        Zobacz szczegóły
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price} zł
                    </span>
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map((size) => (
                        <span 
                          key={size} 
                          className="text-xs px-2 py-1 bg-muted rounded"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to={`/product/${product.id}`} className="w-full">
                    <Button className="w-full group/btn">
                      <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Dodaj do koszyka
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4 text-center animate-fade-in">
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
