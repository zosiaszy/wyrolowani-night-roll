export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  distance: string;
  difficulty: 'Początkujący' | 'Średniozaawansowany' | 'Zaawansowany';
}

export const upcomingEvents: Event[] = [
  {
    id: 'event-1',
    title: 'Nocny Przejazd - Centrum Piotrkowa Tryb',
    date: '2025-03-15',
    time: '20:00',
    location: 'Start: Rynek w Piotrkowie Tryb',
    description: 'Klasyczny nocny przejazd przez centrum miasta. Trasa prowadzi najważniejszymi ulicami z pięknymi iluminacjami. Muzyka, dobra energia i bezpieczna jazda w kolumnie!',
    distance: '12 km',
    difficulty: 'Początkujący',
  },
  {
    id: 'event-2',
    title: 'Neonowa Noc - Trasa Extended',
    date: '2025-03-22',
    time: '20:30',
    location: 'Start: Park Miejski',
    description: 'Dłuższa trasa dla bardziej zaawansowanych. Przejazd przez malownicze zakątki miasta z postojami przy neonowych instalacjach. Obowiązkowo kask i ochraniacze!',
    distance: '18 km',
    difficulty: 'Średniozaawansowany',
  },
  {
    id: 'event-3',
    title: 'Midnight City Ride',
    date: '2025-03-29',
    time: '21:00',
    location: 'Start: Stadion Miejski',
    description: 'Specjalny nocny maraton dla wytrawnych rolkarzy. Trasa wiedzie przez najpiękniejsze nocne arterie miasta. DJ set na starcie i mecie!',
    distance: '25 km',
    difficulty: 'Zaawansowany',
  },
];
