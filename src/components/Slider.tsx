"use client";
import { useEffect, useRef } from 'react';
import React from 'react';

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let currentIndex = 0;

    const moveSlide = () => {
      if (slider) {
        currentIndex = (currentIndex + 1) % React.Children.count(children);
        const newTranslateX = -currentIndex * slider.clientWidth;
        slider.style.transform = `translateX(${newTranslateX}px)`;
      }
    };

    const interval = setInterval(moveSlide, 8000); // Mueve cada 8 segundos

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [children]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out h-full" ref={sliderRef}>
        {React.Children.map(children, (child) => (
          <div className="min-w-full h-full flex items-center justify-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
