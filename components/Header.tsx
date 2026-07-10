'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: "마음그린다 소개", href: "#trust" },
  { label: "초기상담 · 예약", href: "#reserve" },
  { label: "심리평가", href: "#" },
  { label: "상담프로그램", href: "#programs" },
  { label: "자기조절 기반 인지학습치료", href: "#" },
  { label: "사회성 집단프로그램", href: "#" },
  { label: "마음연구소", href: "#insights" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center">
          <Image
            src="/simbal.png"
            alt="마음그린다"
            width={171}
            height={162}
            priority
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[14.5px] font-medium text-muted transition-colors hover:text-rose-strong ${
                scrolled ? '' : '[text-shadow:0_1px_6px_rgba(255,255,255,0.75)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#reserve"
          className="rounded-full bg-rose-strong px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_6px_16px_-4px_rgba(217,93,132,0.5)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          예약하기
        </a>
      </div>
    </header>
  );
}
