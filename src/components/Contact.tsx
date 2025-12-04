import { useState } from 'react';
import { Mail, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        });

      if (error) throw error;

      toast({
        title: "Wiadomość wysłana!",
        description: "Odpowiemy najszybciej jak to możliwe."
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
              Skontaktuj się <span className="text-primary">z nami</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold mb-3">
                    Imię i nazwisko
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Jan Kowalski" 
                    required 
                    className="h-14 text-base px-5"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-semibold mb-3">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="jan@example.com" 
                    required 
                    className="h-14 text-base px-5"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base font-semibold mb-3">
                    Wiadomość
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Twoja wiadomość..." 
                    rows={6} 
                    required 
                    className="text-base px-5 py-4"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full py-6 text-base font-bold shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
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
                    wyrolowani.shop@gmail.com
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium text-foreground mr-2">Lokalizacja:</span>
                    Piotrków i okolice
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
