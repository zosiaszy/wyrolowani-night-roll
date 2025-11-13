import { Heart } from 'lucide-react';
import logoImg from '@/assets/logo-wyrolowani.jpg';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logoImg} alt="Wyrolowani" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Społeczność nocnych rolkarzy z Poddębic. Jazda, muzyka, bezpieczeństwo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Szybkie linki</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  O projekcie
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-secondary transition-colors">
                  Wydarzenia
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-accent transition-colors">
                  Sklep
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informacje</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Regulamin przejazdów
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Warunki sklepu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Stworzone z <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> przez Wyrolowani © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
