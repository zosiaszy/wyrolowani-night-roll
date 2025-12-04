import logoImg from '@/assets/logo-wyrolowani.png';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="h-32 w-32 rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
              <img src={logoImg} alt="Wyrolowani – logo" className="h-full w-full object-contain bg-transparent" />
            </div>
            <p className="text-sm text-muted-foreground">
              Społeczność nocnych rolkarzy z Piotrkowa Tryb. Jazda, muzyka, bezpieczeństwo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Szybkie linki</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors story-link text-glow">
                  O projekcie
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-secondary transition-colors story-link text-glow">
                  Wydarzenia
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-accent transition-colors story-link text-glow">
                  Sklep
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors story-link text-glow">
                  Galeria
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© Wyrolowani 2025</p>
        </div>
      </div>
    </footer>
  );
}
