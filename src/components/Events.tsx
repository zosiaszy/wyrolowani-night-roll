import { Calendar, MapPin, ArrowUpRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { upcomingEvents } from '@/data/events';

export function Events() {
  const getDifficultyStyles = (difficulty: string) => {
    switch (difficulty) {
      case 'Początkujący':
        return 'border-border text-foreground bg-transparent';
      case 'Średniozaawansowany':
        return 'border-primary/50 text-primary bg-transparent';
      case 'Zaawansowany':
        return 'border-green-500/50 text-green-500 bg-green-500/10';
      default:
        return 'border-border text-foreground bg-transparent';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pl-PL', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

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

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="border border-border rounded-xl p-6 space-y-4 animate-fade-in-up bg-card/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with badge and distance */}
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className={getDifficultyStyles(event.difficulty)}>
                    {event.difficulty}
                  </Badge>
                  <span className="text-sm text-muted-foreground">≈ {event.distance}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading leading-tight">
                  {event.title}
                </h3>

                {/* Date and Location */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(event.date)} • {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Start: {event.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Button */}
                <Button 
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Zapisz się
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
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
