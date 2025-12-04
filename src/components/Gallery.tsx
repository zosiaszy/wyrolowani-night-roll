import { Facebook } from 'lucide-react';
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

          {/* Gallery Carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-6">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-6 basis-full sm:basis-1/2">
                  <div 
                    className="group border border-primary/20 rounded-lg p-2 sm:p-3 md:p-4 hover:border-primary/50 transition-all duration-300 bg-card"
                    style={{ 
                      boxShadow: '0 0 15px hsl(var(--primary) / 0.1)'
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 md:-left-6 bg-background/80 border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden sm:flex -right-4 md:-right-6 bg-background/80 border-border hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

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
