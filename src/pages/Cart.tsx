import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast({
      title: "Przejście do płatności",
      description: "Ta funkcja będzie dostępna wkrótce!",
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Koszyk wyczyszczony",
      description: "Wszystkie produkty zostały usunięte.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">Twój koszyk jest pusty</h1>
                <p className="text-xl text-muted-foreground">
                  Czas dodać coś fajnego z naszego sklepu!
                </p>
              </div>
              <Link to="/">
                <Button size="lg" className="group">
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  Wróć do sklepu
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between animate-fade-in">
              <div>
                <h1 className="text-4xl font-bold mb-2">Koszyk</h1>
                <p className="text-muted-foreground">
                  {items.length} {items.length === 1 ? 'produkt' : 'produkty/ów'} w koszyku
                </p>
              </div>
              <Link to="/">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Kontynuuj zakupy
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4 animate-fade-in-up">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="bg-card border border-border rounded-xl p-6 flex gap-6 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Rozmiar: {item.size}</p>
                      </div>
                      <p className="text-xl font-bold text-primary">{item.price} zł</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  variant="ghost"
                  onClick={handleClearCart}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Wyczyść koszyk
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-6 space-y-6 sticky top-24 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-2xl font-bold">Podsumowanie</h2>

                  <div className="space-y-3 py-4 border-y border-border">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Suma częściowa</span>
                      <span>{totalPrice} zł</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Wysyłka</span>
                      <span>{totalPrice >= 200 ? 'Darmowa' : '15 zł'}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl font-bold">
                    <span>Razem</span>
                    <span className="text-primary">
                      {totalPrice >= 200 ? totalPrice : totalPrice + 15} zł
                    </span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full shadow-[var(--shadow-neon-yellow)] hover:shadow-[var(--shadow-neon-yellow)]"
                    onClick={handleCheckout}
                  >
                    Przejdź do płatności
                  </Button>

                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>✓ Bezpieczna płatność</p>
                    <p>✓ Wysyłka w 2-3 dni</p>
                    <p>✓ 14 dni na zwrot</p>
                  </div>

                  {totalPrice < 200 && (
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm">
                      <p className="text-primary font-medium">
                        Dodaj produkty za {200 - totalPrice} zł, aby otrzymać darmową wysyłkę!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
