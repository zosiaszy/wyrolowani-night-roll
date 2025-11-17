import { Calendar, MapPin, Route, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { upcomingEvents } from '@/data/events';

export function Events() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Początkujący':
        return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50';
      case 'Średniozaawansowany':
        return 'bg-primary/20 text-primary border-primary/50';
      case 'Zaawansowany':
        return 'bg-accent/20 text-accent border-accent/50';
      default:
        return 'bg-muted text-muted-foreground';
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
    <section id="events" className="py-32 relative overflow-hidden bg-muted/20">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
              Nadchodzące <span className="text-secondary">przejazdy</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dołącz do nas na najbliższych nightskating eventach. Każdy przejazd to nowe doświadczenie!
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="group hover:border-primary transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 animate-fade-in-up border-2 ring-1 ring-primary/30 hover:ring-primary/80 duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className={getDifficultyColor(event.difficulty)}>
                      {event.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Route className="h-4 w-4 mr-1" />
                      {event.distance}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="space-y-2 pt-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {formatDate(event.date)} • {event.time}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-secondary" />
                      {event.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full group/btn"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Zapisz się
                    <TrendingUp className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4 animate-fade-in">
            <h3 className="text-2xl font-semibold flex items-center">
              <span className="text-primary mr-2">⚠️</span>
              Ważne informacje
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Obowiązkowy ekwipunek: <strong className="text-foreground">kask, ochraniacze na łokcie i kolana</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Wymagana umiejętność hamowania i bezpiecznej jazdy w kolumnie</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Niepełnoletni tylko pod opieką rodzica/opiekuna</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Zasady ruchu drogowego obowiązują - jedziemy zgodnie z przepisami</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
