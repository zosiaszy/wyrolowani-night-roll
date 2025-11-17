import { Users, Heart, Trophy, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
              <span className="text-primary">Dlaczego</span> Wyrolowani?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nightskating to nie tylko sport - to styl życia, społeczność i niezapomniane przeżycia w nocnym mieście
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-card/60 backdrop-blur-md border-2 border-border rounded-2xl p-10 md:p-14 space-y-8 animate-fade-in-up shadow-[var(--shadow-card)] ring-1 ring-primary/40">
            <h3 className="text-3xl font-bold text-foreground font-heading">Nasza misja</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Wyrolowani to projekt, który promuje aktywność fizyczną i zdrowy tryb życia poprzez nocne przejazdy na rolkach. 
              Jeździmy po ulicach Piotrkowa i okolic, tworząc bezpieczną i energetyczną kolumnę rolkarzy, którzy kochają miasto nocą.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Każdy przejazd to połączenie muzyki, świateł miasta i wspólnej pasji. Dbamy o bezpieczeństwo - obowiązkowo w kaskach 
              i ochraniaczy, z regulaminami i wsparciem organizatorów.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-md border-2 border-border rounded-2xl p-10 space-y-5 hover:border-primary transition-all hover:-translate-y-1 group animate-fade-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] ring-1 ring-primary/30 hover:ring-primary/70 duration-300">
              <Users className="h-14 w-14 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-heading">Społeczność</h3>
              <ul className="space-y-3 text-muted-foreground text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Poznaj nowych ludzi z pasją do rolek
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Wspólna energia i pozytywna atmosfera
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Wydarzenia dla każdego poziomu
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-md border-2 border-border rounded-2xl p-10 space-y-5 hover:border-secondary transition-all hover:-translate-y-1 group animate-fade-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] ring-1 ring-secondary/30 hover:ring-secondary/70 duration-300">
              <Heart className="h-14 w-14 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-heading">Zdrowie</h3>
              <ul className="space-y-3 text-muted-foreground text-base">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">•</span>
                  Świetna forma cardio na świeżym powietrzu
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">•</span>
                  Wzmacniasz mięśnie nóg i core
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">•</span>
                  Rozładowanie stresu po pracy
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-md border-2 border-border rounded-2xl p-10 space-y-5 hover:border-accent transition-all hover:-translate-y-1 group animate-fade-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] ring-1 ring-accent/30 hover:ring-accent/70 duration-300">
              <Trophy className="h-14 w-14 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-heading">Rozwój</h3>
              <ul className="space-y-3 text-muted-foreground text-base">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">•</span>
                  Doskonalenie techniki jazdy
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">•</span>
                  Trasy dla każdego poziomu
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-xl">•</span>
                  Wsparcie doświadczonych rolkarzy
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-md border-2 border-border rounded-2xl p-10 space-y-5 hover:border-primary transition-all hover:-translate-y-1 group animate-fade-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] ring-1 ring-primary/30 hover:ring-primary/70 duration-300">
              <Sparkles className="h-14 w-14 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-heading">Atmosfera</h3>
              <ul className="space-y-3 text-muted-foreground text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Miasto nocą w nowym świetle
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Muzyka, światła i energia
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Niezapomniane przeżycia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
