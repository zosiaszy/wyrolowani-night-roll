import { ArrowRight, Shield, Music, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/hero-nightskating-premium.jpg';

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
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-transparent"></div>
      </div>

      {/* Animated Vintage Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-20">
        <div className="max-w-5xl text-left space-y-12 animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9]">
            <span className="block text-foreground" style={{ textShadow: '0 8px 24px rgba(0,0,0,0.9), 0 4px 12px rgba(196,170,140,0.8)' }}>Wyrolowani</span>
            <span className="block text-primary mt-4" style={{ textShadow: '0 8px 24px rgba(0,0,0,0.9), 0 4px 12px rgba(196,170,140,0.8)' }}>
              Nocna jazda<br />na rolkach
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-3xl leading-relaxed font-light" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>
            Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto. Muzyka, energia i bezpieczna jazda w kolumnie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-start pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group bg-primary text-primary-foreground hover:bg-primary/80 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all px-10 py-7 text-lg font-semibold"
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('shop')}
              className="group border-2 border-foreground/30 bg-background/40 hover:bg-foreground/10 hover:border-foreground/60 backdrop-blur-sm px-10 py-7 text-lg font-semibold shadow-lg"
            >
              Wejdź do sklepu
              <ShoppingBag className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-6xl">
            <div className="flex flex-col items-start space-y-4 p-8 rounded-2xl bg-card/60 backdrop-blur-md border-2 border-border/50 hover:border-primary/60 transition-all group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] ring-1 ring-primary/10 hover:ring-primary/40 hover:-translate-y-1">
              <Shield className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl">Bezpieczne przejazdy</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div className="flex flex-col items-start space-y-4 p-8 rounded-2xl bg-card/60 backdrop-blur-md border-2 border-border/50 hover:border-secondary/60 transition-all group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] ring-1 ring-secondary/10 hover:ring-secondary/40 hover:-translate-y-1">
              <Music className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl">Atmosfera nocnego miasta</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div className="flex flex-col items-start space-y-4 p-8 rounded-2xl bg-card/60 backdrop-blur-md border-2 border-border/50 hover:border-accent/60 transition-all group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] ring-1 ring-accent/10 hover:ring-accent/40 hover:-translate-y-1">
              <ShoppingBag className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl">Merch dla wyrolowanych</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
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
