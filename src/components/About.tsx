import { Users, Heart, Trophy, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Dlaczego</span> Wyrolowani?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nightskating to nie tylko sport - to styl życia, społeczność i niezapomniane przeżycia w nocnym mieście
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-6 animate-fade-in-up shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-semibold text-foreground">Nasza misja</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Wyrolowani to projekt, który promuje aktywność fizyczną i zdrowy tryb życia poprzez nocne przejazdy na rolkach. 
              Jeździmy po ulicach Poddębic i okolic, tworząc bezpieczną i energetyczną kolumnę rolkarzy, którzy kochają miasto nocą.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Każdy przejazd to połączenie muzyki, świateł miasta i wspólnej pasji. Dbamy o bezpieczeństwo - obowiązkowo w kaskach 
              i ochraniaczy, z regulaminami i wsparciem organizatorów.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4 hover:border-primary transition-all group animate-fade-in">
              <Users className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold">Społeczność</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Poznaj nowych ludzi z pasją do rolek
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Wspólna energia i pozytywna atmosfera
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Wydarzenia dla każdego poziomu
                </li>
              </ul>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4 hover:border-secondary transition-all group animate-fade-in">
              <Heart className="h-12 w-12 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold">Zdrowie</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Świetna forma cardio na świeżym powietrzu
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Wzmacniasz mięśnie nóg i core
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Rozładowanie stresu po pracy
                </li>
              </ul>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4 hover:border-accent transition-all group animate-fade-in">
              <Trophy className="h-12 w-12 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold">Bezpieczeństwo</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Obowiązkowe kaski i ochraniacze
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Organizowane trasy z escort
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Regulamin i zasady dla wszystkich
                </li>
              </ul>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4 hover:border-neon-pink transition-all group animate-fade-in">
              <Sparkles className="h-12 w-12 text-neon-pink group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold">Doświadczenie</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">•</span>
                  Miasto nocą w zupełnie nowym świetle
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">•</span>
                  Muzyka i neonowe światła
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">•</span>
                  Niezapomniane wspomnienia
                </li>
              </ul>
            </div>
          </div>

          {/* Partners Placeholder */}
          <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-8 text-center space-y-4">
            <h3 className="text-xl font-semibold">Nasi partnerzy</h3>
            <p className="text-muted-foreground">
              Współpracujemy z lokalnymi instytucjami i firmami, aby zapewnić najlepsze warunki do jazdy
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 pt-4">
              <div className="w-32 h-16 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                Partner 1
              </div>
              <div className="w-32 h-16 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                Partner 2
              </div>
              <div className="w-32 h-16 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                Partner 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
