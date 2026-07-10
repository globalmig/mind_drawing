const GROUPS = [
  {
    age: "영유아",
    range: "0~7세",
    desc: "발달 · 정서 · 관계의 건강한 성장을 돕습니다.",
    tags: ["발달지연", "분리불안", "언어발달", "또래관계"],
    color: "gold" as const,
  },
  {
    age: "아동",
    range: "8~13세",
    desc: "학교와 일상 속 어려움을 함께 이해합니다.",
    tags: ["ADHD", "사회성", "감정조절", "친구관계", "틱", "학교적응"],
    color: "blue" as const,
  },
  {
    age: "청소년",
    range: "14~19세",
    desc: "감정과 관계, 자기이해의 성장을 돕습니다.",
    tags: ["우울·불안", "등교거부", "무기력", "친구관계", "자존감", "진로 고민"],
    color: "neutral" as const,
  },
  {
    age: "성인",
    range: "20세~",
    desc: "삶의 어려움 속에서 회복과 변화를 함께합니다.",
    tags: ["우울·불안·공황", "스트레스·번아웃", "성인 ADHD", "애착 및 대인관계", "자기이해와 삶의 방향"],
    color: "brand" as const,
  },
];

const COLOR_MAP = {
  gold: { soft: "bg-gold-soft", text: "text-gold" },
  blue: { soft: "bg-blue-soft", text: "text-blue-strong" },
  neutral: { soft: "bg-surface-warm", text: "text-foreground" },
  brand: { soft: "bg-brand-light", text: "text-brand" },
};

export default function AudienceSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-wide text-blue-strong">
            FOR EVERY GENERATION
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[32px]">
            다양한 대상의 마음을 이해합니다
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => {
            const colors = COLOR_MAP[group.color];
            return (
              <div
                key={group.age}
                className="flex flex-col rounded-3xl border border-line bg-surface p-7 transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(43,38,32,0.35)]"
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[12px] font-bold ${colors.soft} ${colors.text}`}
                >
                  {group.range}
                </span>
                <h3 className="mt-4 text-[19px] font-extrabold text-foreground">
                  {group.age}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  {group.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-surface-warm px-2.5 py-1 text-[11.5px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
