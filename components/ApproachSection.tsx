function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 21s-6.7-4.35-9.3-8.28C1.02 10.36 1.5 7 4.5 5.5c2.2-1.1 4.5-.2 5.5 1.5 1-1.7 3.3-2.6 5.5-1.5 3 1.5 3.48 4.86 1.8 7.22C18.7 16.65 12 21 12 21z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M9.5 4.5a2.5 2.5 0 0 0-2.5 2.5 2.7 2.7 0 0 0-2 2.6v1.2a2.7 2.7 0 0 0 1.3 2.3 2.7 2.7 0 0 0 2.7 3h.5" />
      <path d="M9.5 4.5V17a2.5 2.5 0 0 1-2.5 2.5" />
      <path d="M14.5 4.5a2.5 2.5 0 0 1 2.5 2.5 2.7 2.7 0 0 1 2 2.6v1.2a2.7 2.7 0 0 1-1.3 2.3 2.7 2.7 0 0 1-2.7 3H15" />
      <path d="M14.5 4.5V17a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="9" cy="8" r="3" />
      <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M14.7 20c.3-2.2 1.8-3.8 3.5-3.8s3.1 1.6 3.5 3.8" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="6" cy="17" r="1.6" />
      <circle cx="18" cy="17" r="1.6" />
      <path d="M12 6.6 7 15.5M12 6.6l5 8.9M7.6 17h8.8" />
    </svg>
  );
}

const CIRCLES = [
  {
    key: "eq",
    label: "정서 (EQ)",
    desc: "감정을 이해하고\n안전하게 표현합니다.",
    blob: "left-1/2 top-0 -translate-x-1/2",
    content: "left-1/2 top-[10%] -translate-x-1/2",
    color: "bg-rose/60",
    icon: <HeartIcon />,
    iconColor: "text-rose-strong",
  },
  {
    key: "iq",
    label: "인지 (IQ)",
    desc: "생각과 행동을 이해하고\n자기조절 능력을 키웁니다.",
    blob: "left-0 bottom-0",
    content: "left-[27%] bottom-[12%] -translate-x-1/2",
    color: "bg-blue/55",
    icon: <BrainIcon />,
    iconColor: "text-blue-strong",
  },
  {
    key: "sq",
    label: "사회성 (SQ)",
    desc: "관계 속에서 공감하고\n건강하게 성장합니다.",
    blob: "right-0 bottom-0",
    content: "left-[73%] bottom-[12%] -translate-x-1/2",
    color: "bg-brand/40",
    icon: <PeopleIcon />,
    iconColor: "text-brand-dark",
  },
];

export default function ApproachSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-bold tracking-wide text-blue-strong">
          마음그린다의 접근방식
        </p>
        <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[32px]">
          정서(EQ) · 인지(IQ) · 사회성(SQ) 통합 접근
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          한 사람의 감정, 생각, 관계는 서로 연결되어 있습니다.
          <br className="hidden sm:block" />
          마음그린다는 이 세 가지를 통합적으로 이해하며 건강한 변화를
          만들어갑니다.
        </p>
      </div>

      <div className="relative mx-auto mt-16 aspect-square w-full max-w-[600px]">
        {CIRCLES.map((c) => (
          <div
            key={c.key}
            className={`absolute h-[58%] w-[58%] rounded-full ${c.color} mix-blend-multiply ${c.blob}`}
          />
        ))}

        {CIRCLES.map((c) => (
          <div
            key={c.key}
            className={`absolute z-10 flex w-[36%] flex-col items-center text-center ${c.content}`}
          >
            <span className={`flex h-11 w-11 items-center justify-center rounded-full bg-surface shadow-sm ${c.iconColor}`}>
              {c.icon}
            </span>
            <p className="mt-2 text-[15px] font-bold text-foreground">
              {c.label}
            </p>
            <p className="mt-1 whitespace-pre-line text-[12px] leading-relaxed text-muted">
              {c.desc}
            </p>
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full bg-surface text-center shadow-[0_16px_32px_-14px_rgba(43,38,32,0.4)]">
          <span className="text-brand-dark">
            <IntegrationIcon />
          </span>
          <p className="text-[12px] font-bold leading-snug text-brand-dark">
            감정, 생각, 관계를
            <br />
            함께 이해할 때
            <br />
            건강한 변화가
            <br />
            시작됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
