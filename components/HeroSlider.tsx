'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/images/hero.webp', alt: '마음드로잉 심리상담센터 이미지 1' },
  { src: '/images/hero2.webp', alt: '마음드로잉 심리상담센터 이미지 2' },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLIDES.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`${index + 1}번째 이미지 보기`}
            className={`h-2 rounded-full transition-all ${
              index === active ? 'w-6 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
