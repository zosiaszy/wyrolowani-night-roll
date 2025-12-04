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
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 70%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center pt-32 pb-48">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          {/* Main Heading - bold elegant */}
          <h1 
            className="font-heading text-primary text-5xl md:text-7xl lg:text-8xl tracking-wider font-bold"
            style={{ textShadow: '0 0 40px hsl(35 25% 60% / 0.6), 0 0 80px hsl(35 25% 60% / 0.3)' }}
          >
            WYROLOWANI
          </h1>

          {/* Subtitle - matching nav style with glow */}
          <p 
            className="text-sm md:text-base text-foreground/80 max-w-xl mx-auto leading-relaxed font-medium tracking-wide"
            style={{ textShadow: '0 0 20px hsl(35 25% 60% / 0.5)' }}
          >
            Dołącz do społeczności rolkarzy, którzy pokochali nocne miasto.<br />
            Muzyka, energia i bezpieczna jazda w kolumnie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('events')}
              className="group bg-primary/80 hover:bg-primary text-primary-foreground px-8 py-6 text-sm font-medium rounded-lg"
            >
              Sprawdź przejazdy
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wyrolowani.cyberstores.pl/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="group border border-foreground/20 bg-background/30 backdrop-blur-sm hover:bg-background/40 px-8 py-6 text-sm font-medium rounded-lg"
              >
                Wejdź do sklepu
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Feature Cards - with glowing borders */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div 
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border border-primary/40 bg-background/30 backdrop-blur-sm transition-all hover:border-primary/60"
              style={{ boxShadow: '0 0 20px hsl(35 25% 60% / 0.2), inset 0 0 20px hsl(35 25% 60% / 0.05)' }}
            >
              <Shield className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 
                className="text-sm font-medium tracking-wide"
                style={{ textShadow: '0 0 15px hsl(35 25% 60% / 0.5)' }}
              >
                Bezpieczne przejazdy
              </h3>
              <p className="text-xs text-muted-foreground">
                Kask, ochraniacze i bezpieczna trasa
              </p>
            </div>

            <div 
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border border-primary/40 bg-background/30 backdrop-blur-sm transition-all hover:border-primary/60"
              style={{ boxShadow: '0 0 20px hsl(35 25% 60% / 0.2), inset 0 0 20px hsl(35 25% 60% / 0.05)' }}
            >
              <Music className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 
                className="text-sm font-medium tracking-wide"
                style={{ textShadow: '0 0 15px hsl(35 25% 60% / 0.5)' }}
              >
                Atmosfera nocnego miasta
              </h3>
              <p className="text-xs text-muted-foreground">
                Muzyka, światła i niezapomniane chwile
              </p>
            </div>

            <div 
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border border-primary/40 bg-background/30 backdrop-blur-sm transition-all hover:border-primary/60"
              style={{ boxShadow: '0 0 20px hsl(35 25% 60% / 0.2), inset 0 0 20px hsl(35 25% 60% / 0.05)' }}
            >
              <ShoppingBag className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 
                className="text-sm font-medium tracking-wide"
                style={{ textShadow: '0 0 15px hsl(35 25% 60% / 0.5)' }}
              >
                Merch dla wyrolowanych
              </h3>
              <p className="text-xs text-muted-foreground">
                Oficjalny streetwear z neonowym stylem
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center pt-6 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/60">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
