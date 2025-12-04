import { ArrowRight, Shield, Music, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/hero-rollerskates-closeup.jpg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image - adjusted for mobile */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        {/* Stronger overlay on mobile for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 md:from-background/60 md:via-background/40 md:to-background/70"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center pt-24 md:pt-32 pb-32 md:pb-48">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 animate-fade-in-up">
          {/* Main Heading - bold elegant, responsive */}
          <h1 
            className="font-heading text-primary text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider font-bold"
            style={{ textShadow: '0 0 30px hsl(35 25% 60% / 0.5), 0 0 60px hsl(35 25% 60% / 0.2)' }}
          >
            WYROLOWANI
          </h1>

          {/* Subtitle - matching nav style with glow */}
          <p 
            className="text-xs sm:text-sm md:text-base text-foreground/90 max-w-xl mx-auto leading-relaxed font-medium tracking-wide px-4"
            style={{ textShadow: '0 0 15px hsl(35 25% 60% / 0.4)' }}
          >
            Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto.<br className="hidden sm:block" />
            Muzyka, energia i bezpieczna jazda w kolumnie.
          </p>

          {/* CTA Buttons - responsive */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2 md:pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group bg-primary/80 hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-medium rounded-lg w-full sm:w-auto"
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wyrolowani.cyberstores.pl/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="group border border-foreground/20 bg-background/30 backdrop-blur-sm hover:bg-background/40 px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-medium rounded-lg w-full"
              >
                Wejdź do sklepu
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Feature Cards - responsive grid */}
      <div className="relative z-10 pb-8 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            <div 
              className="flex flex-col items-center text-center space-y-2 md:space-y-3 p-4 md:p-6 rounded-lg border border-primary/40 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/60"
              style={{ boxShadow: '0 0 15px hsl(35 25% 60% / 0.15), inset 0 0 15px hsl(35 25% 60% / 0.03)' }}
            >
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" strokeWidth={1.5} />
              <h3 
                className="text-xs md:text-sm font-medium tracking-wide"
                style={{ textShadow: '0 0 12px hsl(35 25% 60% / 0.4)' }}
              >
                Bezpieczne przejazdy
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div 
              className="flex flex-col items-center text-center space-y-2 md:space-y-3 p-4 md:p-6 rounded-lg border border-primary/40 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/60"
              style={{ boxShadow: '0 0 15px hsl(35 25% 60% / 0.15), inset 0 0 15px hsl(35 25% 60% / 0.03)' }}
            >
              <Music className="h-4 w-4 md:h-5 md:w-5 text-primary" strokeWidth={1.5} />
              <h3 
                className="text-xs md:text-sm font-medium tracking-wide"
                style={{ textShadow: '0 0 12px hsl(35 25% 60% / 0.4)' }}
              >
                Atmosfera nocnego miasta
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div 
              className="flex flex-col items-center text-center space-y-2 md:space-y-3 p-4 md:p-6 rounded-lg border border-primary/40 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/60"
              style={{ boxShadow: '0 0 15px hsl(35 25% 60% / 0.15), inset 0 0 15px hsl(35 25% 60% / 0.03)' }}
            >
              <ShoppingBag className="h-4 w-4 md:h-5 md:w-5 text-primary" strokeWidth={1.5} />
              <h3 
                className="text-xs md:text-sm font-medium tracking-wide"
                style={{ textShadow: '0 0 12px hsl(35 25% 60% / 0.4)' }}
              >
                Merch dla wyrolowanych
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                Oficjalny streetwear z neonowym stylem
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center pt-4 md:pt-6 animate-bounce">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/60">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
