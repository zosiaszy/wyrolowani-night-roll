import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo-wyrolowani.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo - much bigger on desktop for readable text */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="Wyrolowani – logo"
              className="h-14 w-14 md:h-24 md:w-24 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium story-link hover-scale text-glow text-sm lg:text-base px-2 lg:px-3"
            >
              O projekcie
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="text-foreground hover:text-accent transition-colors font-medium story-link hover-scale text-glow text-sm lg:text-base px-2 lg:px-3"
            >
              Sklep
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-foreground hover:text-secondary transition-colors font-medium story-link hover-scale text-glow text-sm lg:text-base px-2 lg:px-3"
            >
              Nightskating
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors font-medium story-link hover-scale text-glow text-sm lg:text-base px-2 lg:px-3"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-secondary transition-colors font-medium story-link hover-scale text-glow text-sm lg:text-base px-2 lg:px-3"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-3 space-y-2 animate-fade-in border-t border-primary/20">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              O projekcie
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Sklep
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Nightskating
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Kontakt
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
