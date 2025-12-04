import { ArrowUpRight, AlertTriangle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Events() {
  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
              <span className="text-primary italic">Nadchodzące</span> przejazdy
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Dołącz do nas na najbliższych nightskating eventach. Każdy przejazd to nowe<br />
              doświadczenie!
            </p>
          </div>

          {/* Aktualności Card - Full Width */}
          <div className="border border-border rounded-xl p-6 md:p-8 animate-fade-in-up bg-card/30 hover:border-primary/50 transition-all duration-300"
               style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.1)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 text-base px-4 py-1">
                Aktualności
              </Badge>
              <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5 px-3 py-1">
                <Lock className="h-3 w-3" />
                Już niedługo
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
              {/* Facebook Video Embed - Bigger */}
              <div className="aspect-[9/16] max-h-[600px] rounded-lg overflow-hidden bg-background/50">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1197874765577453&show_text=false"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col justify-center space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold font-heading leading-tight">
                  Nightskating wraca do Łodzi! 🛼
                </h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p className="text-base md:text-lg font-semibold text-foreground">
                    Decyzja zapadła.
                  </p>
                  <p>
                    Pierwszy Nightskating w Łodzi w sezonie 2026 – robimy to.
                  </p>
                  <p>
                    Dokładną datę ogłosimy, jak tylko zamkniemy formalności z trasą i pozwoleniami, ale możemy to powiedzieć już teraz oficjalnie:
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    Nightskating wraca do Łodzi.
                  </p>
                  <p className="text-foreground font-medium">
                    Kto czeka na nowy sezon? 🔥
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Button 
                    className="w-fit"
                    variant="outline"
                    onClick={() => window.open('https://www.facebook.com/reel/1197874765577453', '_blank')}
                  >
                    Zobacz na Facebooku
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  📱 Śledź nas na bieżąco na <a href="https://www.facebook.com/wyrolowani" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebooku</a>!
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="border border-border rounded-xl p-6 animate-fade-in bg-card/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold font-heading">Ważne informacje</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-foreground mr-2">•</span>
                    Obowiązkowy kask i ochraniacze na wszystkie przejazdy
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2">•</span>
                    Zbiórka 15 minut przed startem
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2">•</span>
                    Jazda w kolumnie - słuchamy organizatorów
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2">•</span>
                    W razie deszczu przejazd może zostać odwołany
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
