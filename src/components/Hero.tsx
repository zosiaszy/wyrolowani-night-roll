import { ArrowRight, Shield, Music, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/hero-rollerblades.jpg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: '80% center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Vintage Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-foreground drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] text-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 20px rgba(196,170,140,0.8), 0 0 40px rgba(196,170,140,0.5)' }}>Wyrolowani</span>
            <span className="block text-primary mt-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 20px rgba(196,170,140,0.8), 0 0 40px rgba(196,170,140,0.5)' }}>
              Nocna jazda na rolkach
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto. Muzyka, energia i bezpieczna jazda w kolumnie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-vintage)] transition-all"
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('shop')}
              className="group border-2"
            >
              Wejdź do sklepu
              <ShoppingBag className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-vintage)] ring-1 ring-primary/20 hover:ring-primary/60">
              <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg">Bezpieczne przejazdy</h3>
              <p className="text-sm text-muted-foreground text-center">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-secondary transition-all group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-vintage)] ring-1 ring-secondary/20 hover:ring-secondary/60">
              <Music className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg">Atmosfera nocnego miasta</h3>
              <p className="text-sm text-muted-foreground text-center">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent transition-all group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-vintage)] ring-1 ring-accent/20 hover:ring-accent/60">
              <ShoppingBag className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg">Merch dla wyrolowanych</h3>
              <p className="text-sm text-muted-foreground text-center">
                Oficjalny streetwear z neonowym stylem
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - moved lower */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
