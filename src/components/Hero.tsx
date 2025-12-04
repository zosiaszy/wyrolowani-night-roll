import { ArrowRight, Shield, Music, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/hero-nightskating-bokeh.jpg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          {/* Main Heading - exactly like reference */}
          <h1 className="font-heading leading-[0.95]">
            <span className="block text-primary italic text-6xl md:text-7xl lg:text-8xl">Wyrolowani</span>
            <span className="block text-primary italic font-normal text-3xl md:text-4xl lg:text-5xl mt-3">
              Nocna jazda<br />na rolkach
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed pt-2">
            Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto.<br />
            Muzyka, energia i bezpieczna jazda w kolumnie.
          </p>

          {/* CTA Buttons - matching reference style */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group bg-primary/80 hover:bg-primary text-primary-foreground px-8 py-6 text-sm font-normal rounded-lg"
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wyrolowani.cyberstores.pl/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="group border border-foreground/20 bg-background/30 backdrop-blur-sm hover:bg-background/40 px-8 py-6 text-sm font-normal rounded-lg"
              >
                Wejdź do sklepu
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Feature Cards - matching reference exactly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm">Bezpieczne przejazdy</h3>
              <p className="text-xs text-muted-foreground">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm">
              <Music className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm">Atmosfera nocnego miasta</h3>
              <p className="text-xs text-muted-foreground">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm">
              <ShoppingBag className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm">Merch dla wyrolowanych</h3>
              <p className="text-xs text-muted-foreground">
                Oficjalny streetwear z neonowym stylem
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - chevron like in reference */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    </section>
  );
}
