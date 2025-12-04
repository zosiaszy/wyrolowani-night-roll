import { Mail, Instagram, Facebook, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61567243250556';
const INSTAGRAM_URL = 'https://www.instagram.com/wyrolowani/';
const SHOP_URL = 'https://wyrolowani.cyberstores.pl/';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-in mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
              Skontaktuj się <span className="text-primary">z nami</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Masz pytania o przejazdy, merch lub chcesz do nas dołączyć? Napisz!
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            {/* Contact Info */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 space-y-4 shadow-[var(--shadow-card)] ring-1 ring-secondary/30">
              <h3 className="text-2xl font-semibold flex items-center">
                <Mail className="mr-2 h-6 w-6 text-secondary" />
                Dane kontaktowe
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <span className="font-medium text-foreground mr-2">Email:</span>
                  <a 
                    href="mailto:wyrolowani.shop@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    wyrolowani.shop@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium text-foreground mr-2">Lokalizacja:</span>
                  Piotrków i okolice
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 space-y-4 shadow-[var(--shadow-card)] ring-1 ring-accent/30">
              <h3 className="text-2xl font-semibold">Social Media</h3>
              <p className="text-muted-foreground">
                Śledź nas w social media, żeby być na bieżąco z nadchodzącymi eventami!
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="group"
                  asChild
                >
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 group-hover:text-accent transition-colors" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="group"
                  asChild
                >
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Shop Link */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 space-y-4 shadow-[var(--shadow-card)] ring-1 ring-primary/30">
              <h3 className="text-2xl font-semibold flex items-center">
                <ShoppingBag className="mr-2 h-6 w-6 text-primary" />
                Sklep
              </h3>
              <p className="text-muted-foreground">
                Sprawdź nasz merch - koszulki, bluzy i więcej!
              </p>
              <Button asChild className="shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)]">
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                  Przejdź do sklepu
                </a>
              </Button>
            </div>

            {/* Tip */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 space-y-2">
              <h4 className="font-semibold text-accent">📍 Punktualność</h4>
              <p className="text-sm text-muted-foreground">
                Przejazdy startują o czasie - bądź 15 minut wcześniej, żeby zdążyć!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
