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
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center pt-36 md:pt-44 pb-32 md:pb-48">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 animate-fade-in-up">
          {/* Main Heading - bold elegant with enhanced glow */}
          <h1 
            className="font-heading text-primary text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider font-bold animate-pulse-glow"
            style={{ 
              textShadow: '0 0 20px hsl(35 25% 65% / 0.8), 0 0 40px hsl(35 25% 60% / 0.5), 0 0 80px hsl(35 25% 55% / 0.3), 0 0 120px hsl(35 25% 50% / 0.2)',
              filter: 'drop-shadow(0 0 10px hsl(35 25% 60% / 0.4))'
            }}
          >
            WYROLOWANI
          </h1>

          {/* Subtitle - enhanced visibility with stronger glow */}
          <div className="space-y-1">
            <p 
              className="text-sm sm:text-base md:text-lg text-foreground max-w-2xl mx-auto font-semibold tracking-wide px-4"
              style={{ textShadow: '0 0 20px hsl(35 25% 65% / 0.6), 0 0 40px hsl(35 25% 60% / 0.3)' }}
            >
              Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto.
            </p>
            <p 
              className="text-sm sm:text-base md:text-lg text-foreground max-w-xl mx-auto font-semibold tracking-wide px-4"
              style={{ textShadow: '0 0 20px hsl(35 25% 65% / 0.6), 0 0 40px hsl(35 25% 60% / 0.3)' }}
            >
              Muzyka, energia i bezpieczna jazda w kolumnie.
            </p>
          </div>

          {/* CTA Buttons - enhanced visibility and hover effects */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2 md:pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(35_25%_60%_/_0.5)]"
              style={{ boxShadow: '0 0 20px hsl(35 25% 60% / 0.3)' }}
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wyrolowani.cyberstores.pl/sklep/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-primary/50 bg-background/40 backdrop-blur-sm hover:bg-primary/20 hover:border-primary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg w-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(35_25%_60%_/_0.4)]"
                style={{ boxShadow: '0 0 15px hsl(35 25% 60% / 0.2)' }}
              >
                Wejdź do sklepu
                <ShoppingBag className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
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
              className="group flex flex-col items-center text-center space-y-2 md:space-y-3 p-5 md:p-7 rounded-lg border border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:scale-105 hover:bg-background/60"
              style={{ boxShadow: '0 0 25px hsl(35 25% 60% / 0.25), inset 0 0 20px hsl(35 25% 60% / 0.05)' }}
            >
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 
                className="text-base md:text-lg font-bold tracking-wide"
                style={{ textShadow: '0 0 15px hsl(35 25% 60% / 0.5)' }}
              >
                Bezpieczne przejazdy
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div 
              className="group flex flex-col items-center text-center space-y-2 md:space-y-3 p-5 md:p-7 rounded-lg border border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:scale-105 hover:bg-background/60"
              style={{ boxShadow: '0 0 25px hsl(35 25% 60% / 0.25), inset 0 0 20px hsl(35 25% 60% / 0.05)' }}
            >
              <Music className="h-6 w-6 md:h-8 md:w-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 
                className="text-base md:text-lg font-bold tracking-wide"
                style={{ textShadow: '0 0 15px hsl(35 25% 60% / 0.5)' }}
              >
                Atmosfera nocnego miasta
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div 
              className="group flex flex-col items-center text-center space-y-2 md:space-y-3 p-5 md:p-7 rounded-lg border border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:scale-105 hover:bg-background/60"
              style={{ boxShadow: '0 0 25px hsl(35 25% 60% / 0.25), inset 0 0 20px hsl(35 25% 60% / 0.05)' }}
            >
              <ShoppingBag className="h-6 w-6 md:h-8 md:w-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 
                className="text-base md:text-lg font-bold tracking-wide"
                style={{ textShadow: '0 0 15px hsl(35 25% 60% / 0.5)' }}
              >
                Merch dla wyrolowanych
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
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
