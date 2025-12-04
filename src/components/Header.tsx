import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo-wyrolowani.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="Wyrolowani – logo"
              className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-semibold story-link hover-scale text-glow text-base px-3"
            >
              O projekcie
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-foreground hover:text-secondary transition-colors font-semibold story-link hover-scale text-glow text-base px-3"
            >
              Nightskating
            </button>
            <a
              href="https://wyrolowani.cyberstores.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors font-semibold story-link hover-scale text-glow text-base px-3"
            >
              Sklep
            </a>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors font-semibold story-link hover-scale text-glow text-base px-3"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-secondary transition-colors font-semibold story-link hover-scale text-glow text-base px-3"
            >
              Kontakt
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden md:flex"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors story-link hover-scale text-glow"
            >
              O projekcie
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors story-link hover-scale text-glow"
            >
              Nightskating
            </button>
            <a
              href="https://wyrolowani.cyberstores.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors story-link hover-scale text-glow"
            >
              Sklep
            </a>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors story-link hover-scale text-glow"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors story-link hover-scale text-glow"
            >
              Kontakt
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-full justify-start px-4"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 mr-2" /> Jasny motyw
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-2" /> Ciemny motyw
                </>
              )}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
