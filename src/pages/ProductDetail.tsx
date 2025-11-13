import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Package, Truck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Produkt nie znaleziony</h1>
          <Link to="/">
            <Button>Wróć do strony głównej</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Wybierz rozmiar",
        description: "Musisz wybrać rozmiar przed dodaniem do koszyka.",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });

    toast({
      title: "Dodano do koszyka!",
      description: `${product.name} (${selectedSize}) został dodany do koszyka.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Powrót do sklepu
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Product Images */}
            <div className="space-y-4 animate-fade-in">
              <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary">{product.price} zł</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.details}
              </p>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Wybierz rozmiar</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground shadow-[var(--shadow-neon-yellow)]'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full group shadow-[var(--shadow-neon-yellow)] hover:shadow-[var(--shadow-neon-yellow)]"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Dodaj do koszyka
                </Button>
              </div>

              {/* Product Details */}
              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="font-semibold text-lg">Szczegóły produktu</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start">
                    <Package className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Materiał</p>
                      <p>{product.material}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Wysyłka</p>
                      <p>2-3 dni robocze. Darmowa wysyłka od 200 zł.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RefreshCw className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Zwroty</p>
                      <p>14 dni na zwrot lub wymianę.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section could go here */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
