import { Mail, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Odpowiemy najszybciej jak to możliwe.",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skontaktuj się <span className="text-primary">z nami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Masz pytania o przejazdy, merch lub chcesz do nas dołączyć? Napisz!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 space-y-6 animate-fade-in-up shadow-[var(--shadow-card)] ring-1 ring-primary/30">
              <h3 className="text-2xl font-semibold flex items-center">
                <MessageSquare className="mr-2 h-6 w-6 text-primary" />
                Formularz kontaktowy
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Imię i nazwisko
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Jan Kowalski" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="jan@example.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Wiadomość
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Twoja wiadomość..."
                    rows={5}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 space-y-4 shadow-[var(--shadow-card)] ring-1 ring-secondary/30">
                <h3 className="text-2xl font-semibold flex items-center">
                  <Mail className="mr-2 h-6 w-6 text-secondary" />
                  Dane kontaktowe
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center">
                    <span className="font-medium text-foreground mr-2">Email:</span>
                    kontakt@wyrolowani.pl
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium text-foreground mr-2">Lokalizacja:</span>
                    Piotrków Tryb i okolice
                  </p>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 space-y-4 shadow-[var(--shadow-card)] ring-1 ring-accent/30">
                <h3 className="text-2xl font-semibold">Social Media</h3>
                <p className="text-muted-foreground">
                  Śledź nas w social media, żeby być na bieżąco z nadchodzącymi eventami!
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="group">
                    <Instagram className="h-5 w-5 group-hover:text-accent transition-colors" />
                  </Button>
                  <Button variant="outline" size="icon" className="group">
                    <Facebook className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </Button>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 space-y-2">
                <h4 className="font-semibold text-accent">📍 Punktualność</h4>
                <p className="text-sm text-muted-foreground">
                  Przejazdy startują o czasie - bądź 15 minut wcześniej, żeby zdążyć!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
