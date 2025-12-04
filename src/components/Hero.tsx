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
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[0.95]">
            <span className="block text-primary">Wyrolowani</span>
            <span className="block text-primary italic font-normal text-4xl md:text-5xl lg:text-6xl mt-2">
              Nocna jazda<br />na rolkach
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto.<br />
            Muzyka, energia i bezpieczna jazda w kolumnie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group px-8 py-6 text-base"
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wyrolowani.cyberstores.pl/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="group border border-foreground/30 bg-transparent hover:bg-foreground/5 px-8 py-6 text-base"
              >
                Wejdź do sklepu
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-sm">Bezpieczne przejazdy</h3>
              <p className="text-xs text-muted-foreground">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <Music className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-sm">Atmosfera nocnego miasta</h3>
              <p className="text-xs text-muted-foreground">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-sm">Merch dla wyrolowanych</h3>
              <p className="text-xs text-muted-foreground">
                Oficjalny streetwear z neonowym stylem
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
