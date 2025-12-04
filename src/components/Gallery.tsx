import { useState } from 'react';
import { Facebook, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Zajęcia dla dzieci' },
  { src: gallery2, alt: 'Nocny przejazd z neonami' },
  { src: gallery3, alt: 'Uśmiechnięci rolkarze' },
  { src: gallery4, alt: 'Koszulki Night Skating' },
  { src: gallery5, alt: 'Grupowe zdjęcie przy Auchan' },
  { src: gallery6, alt: 'Przejazd przez miasto' },
  { src: gallery7, alt: 'Rolki i koszulka' },
];

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61567243250556';

function GalleryImage({ image, index }: { image: typeof galleryImages[0]; index: number }) {
  return (
    <div 
      className="group border border-primary/20 rounded-lg p-2 sm:p-3 md:p-4 hover:border-primary/50 transition-all duration-300 bg-card"
      style={{ 
        boxShadow: '0 0 15px hsl(var(--primary) / 0.1)',
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>
      <p className="text-sm md:text-base text-muted-foreground text-center font-medium mt-3 md:mt-4">
        {image.alt}
      </p>
    </div>
  );
}

// Desktop Gallery with expand/collapse
function DesktopGallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleImages = isExpanded ? galleryImages : galleryImages.slice(0, 4);
  const hiddenCount = galleryImages.length - 4;

  return (
    <div className="hidden md:block space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {visibleImages.map((image, index) => (
          <div key={index} className="animate-fade-in-up">
            <GalleryImage image={image} index={index} />
          </div>
        ))}
      </div>
      
      {hiddenCount > 0 && (
        <div className="text-center pt-4">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 border-primary/50 hover:bg-primary hover:text-primary-foreground"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Zwiń galerię
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Rozwiń ({hiddenCount} więcej)
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

// Mobile Carousel with dots
function MobileGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="md:hidden">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full"
        setApi={(api) => {
          api?.on('select', () => {
            setCurrentIndex(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <GalleryImage image={image} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-4' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden bg-muted/20">
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              <span className="text-accent">Galeria</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Zobacz, jak wyglądają nasze wydarzenia
            </p>
          </div>

          {/* Desktop: Grid with expand */}
          <DesktopGallery />
          
          {/* Mobile: Carousel with dots */}
          <MobileGallery />

          {/* Facebook Link */}
          <div className="text-center animate-fade-in pt-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary hover:text-primary-foreground"
            >
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                Więcej zdjęć na Facebooku
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
