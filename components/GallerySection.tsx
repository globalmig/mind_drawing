import Image from "next/image";

const SCENES = [
  { label: "따뜻한 상담실", src: "/images/room (2).webp" },
  { label: "아동 놀이치료실", src: "/images/room (1).webp" },
  { label: "사회성 집단프로그램", src: "/images/room (3).webp" },
  { label: "모래놀이 심리치료실", src: "/images/room (4).webp" },
  { label: "마음그린다 입구", src: "/images/room (5).webp" },
];

const LOOP_SCENES = [...SCENES, ...SCENES, ...SCENES, ...SCENES];

export default function GallerySection() {
  return (
    <section className="bg-brand-mist py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-wide text-blue-strong">
            INSIDE MIND GEURINDA
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[32px]">
            마음그린다의 다양한 활동
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            내담자와 편안한 만남의 시간, 심리상담센터 내부 모습을 소개합니다.
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 px-6 sm:px-8 lg:px-10">
          {LOOP_SCENES.map((scene, i) => (
            <div
              key={`${scene.label}-${i}`}
              className="relative flex h-[260px] w-[210px] shrink-0 flex-col justify-end overflow-hidden rounded-3xl shadow-[0_18px_36px_-22px_rgba(43,38,32,0.4)] sm:h-[300px] sm:w-[240px]"
            >
              <Image
                src={scene.src}
                alt={scene.label}
                fill
                loading="eager"
                sizes="240px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/0 to-black/0" />
              <span className="relative p-5 text-[14.5px] font-bold text-white">
                {scene.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
