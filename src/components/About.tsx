import { Users, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
              Dlaczego <span className="text-primary italic">Wyrolowani?</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Nightskating to nie tylko sport - to styl życia, społeczność i niezapomniane<br />
              przeżycia w nocnym mieście
            </p>
          </div>

          {/* Main Description Card */}
          <div className="border border-border rounded-xl p-8 md:p-10 space-y-6 animate-fade-in-up bg-card/30">
            <h3 className="text-2xl font-bold font-heading">Nasza misja</h3>
            <p className="text-muted-foreground leading-relaxed">
              Wyrolowani to projekt, który promuje aktywność fizyczną i zdrowy tryb życia poprzez nocne przejazdy 
              na rolkach. Jeździmy po ulicach Piotrkowa i okolic, tworząc bezpieczną i energetyczną kolumnę rolkarzy, 
              którzy kochają miasto nocą.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Każdy przejazd to połączenie muzyki, świateł miasta i wspólnej pasji. Dbamy o bezpieczeństwo - 
              obowiązkowo w kaskach i ochraniaczach, z regulaminami i wsparciem organizatorów.
            </p>
          </div>

          {/* Benefits Grid - Only 2 cards like in screenshot */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-8 space-y-4 animate-fade-in bg-card/30">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold font-heading">Społeczność</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
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
                  Wydarzenia integracyjne i warsztaty
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8 space-y-4 animate-fade-in bg-card/30">
              <Heart className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold font-heading">Zdrowie</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Świetna forma cardio na świeżym powietrzu
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Wzmacniasz mięśnie nóg i core
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Redukcja stresu i endorfiny
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
