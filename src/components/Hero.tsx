import { ArrowRight, Shield, Music, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/hero-rollerskates-dark.jpg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Right Side */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
      </div>

      {/* Animated Vintage Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-20">
        <div className="max-w-3xl text-left space-y-8 animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
            <span className="block text-foreground" style={{ textShadow: '0 8px 24px rgba(0,0,0,0.9), 0 4px 12px rgba(196,170,140,0.6)' }}>Wyrolowani</span>
            <span className="block text-primary mt-2" style={{ textShadow: '0 8px 24px rgba(0,0,0,0.9), 0 4px 12px rgba(196,170,140,0.8)' }}>
              Nocna jazda<br />na rolkach
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-foreground/90 max-w-2xl leading-relaxed font-light" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>
            Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto. Muzyka, energia i bezpieczna jazda w kolumnie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-start pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group bg-primary text-primary-foreground hover:bg-primary/80 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all px-7 py-5 text-base font-semibold"
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('shop')}
              className="group border-2 border-foreground/30 bg-background/40 hover:bg-foreground/10 hover:border-foreground/60 backdrop-blur-sm px-7 py-5 text-base font-semibold shadow-lg"
            >
              Wejdź do sklepu
              <ShoppingBag className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 max-w-4xl">
            <div className="flex flex-col items-start space-y-2 p-5 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all group shadow-sm hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
              <Shield className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base">Bezpieczne przejazdy</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2 p-5 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-secondary/50 transition-all group shadow-sm hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
              <Music className="h-7 w-7 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base">Atmosfera nocnego miasta</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2 p-5 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-accent/50 transition-all group shadow-sm hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
              <ShoppingBag className="h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base">Merch dla wyrolowanych</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Oficjalny streetwear z neonowym stylem
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 h-9 border-2 border-primary/70 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2.5 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
