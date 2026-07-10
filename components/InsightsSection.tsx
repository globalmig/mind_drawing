import Image from "next/image";

const POSTS = [
  {
    tag: "아동 · 발달",
    title: "우리 아이, ADHD일까요? 짜증과 산만함 구분하기",
    date: "2026.06.28",
    image: "/person/tc02360000290_l.jpg",
    tagColor: "text-blue-strong",
  },
  {
    tag: "청소년",
    title: "등교거부, 야단보다 먼저 필요한 것들",
    date: "2026.06.14",
    image: "/person/td0131t455593_l.jpg",
    tagColor: "text-blue-strong",
  },
  {
    tag: "성인 · 번아웃",
    title: "번아웃과 우울, 어떻게 다르고 어떻게 접근할까",
    date: "2026.05.30",
    image: "/person/tc07150000015_l.jpg",
    tagColor: "text-blue-strong",
  },
  {
    tag: "부모상담",
    title: "아이 마음, 부모 마음 — 함께 균형 맞추기",
    date: "2026.05.12",
    image: "/person/td0502t043998_l.jpg",
    tagColor: "text-blue-strong",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-wide text-blue-strong">
            마음연구소
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[32px]">
            전문적인 심리 정보와 유익한 글을 전합니다
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group relative h-75 overflow-hidden rounded-3xl border border-line transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(43,38,32,0.35)]"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/0" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className={`text-[12px] font-bold ${post.tagColor === "text-blue-strong" ? "text-blue-200" : post.tagColor}`}>
                  {post.tag}
                </span>
                <h3 className="mt-2 text-[15px] font-bold leading-snug text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-[12.5px] text-white/70">{post.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#insights"
            className="rounded-full border border-line bg-surface px-6 py-3 text-[14px] font-semibold text-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}
