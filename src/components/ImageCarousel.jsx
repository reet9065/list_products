import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <div className="absolute inset-0 flex items-center justify-between z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToPrevious}
          className="bg-white/50 hover:bg-white/80"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToNext}
          className="bg-white/50 hover:bg-white/80"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="flex overflow-hidden h-full">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`min-w-full h-full transition-transform duration-300 ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <img 
              src={image} 
              alt={`Item view ${index + 1}`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}