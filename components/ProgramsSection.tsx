const PROGRAMS = [
  {
    title: "심리평가",
    desc: "종합심리검사로 정서·인지·행동을 객관적으로 이해합니다.",
    icon: <BrainIcon />,
    chip: "bg-terracotta-soft text-terracotta",
  },
  {
    title: "개인상담",
    desc: "안전한 관계 안에서 나를 이해하고 변화를 만들어갑니다.",
    icon: <SeedlingIcon />,
    chip: "bg-blue-soft text-blue-strong",
  },
  {
    title: "자기조절 기반 인지학습치료",
    desc: "생각과 행동을 조절하는 힘을 키우는 학습치료입니다.",
    icon: <PaletteIcon />,
    chip: "bg-brand-light text-brand",
  },
  {
    title: "사회성 집단프로그램",
    desc: "또래 관계 속에서 공감과 소통 능력을 연습합니다.",
    icon: <HandsIcon />,
    chip: "bg-blue-soft text-blue-strong",
  },
  {
    title: "가족 · 부부상담",
    desc: "가족 안에서의 관계와 소통 방식을 함께 살펴봅니다.",
    icon: <FamilyIcon />,
    chip: "bg-terracotta-soft text-terracotta",
  },
  {
    title: "집단상담 프로그램",
    desc: "비슷한 어려움을 가진 사람들과 함께 성장합니다.",
    icon: <GroupIcon />,
    chip: "bg-brand-light text-brand",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-wide text-blue-strong">
            PROGRAMS
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[32px]">
            전문 프로그램
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-3xl border border-line bg-surface p-7 transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(43,38,32,0.35)]"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${p.chip}`}>
                {p.icon}
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function iconProps() {
  return {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function BrainIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3.2 3.2 0 0 0 1.5 5.3A3 3 0 0 0 9 20V4Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3.2 3.2 0 0 1-1.5 5.3A3 3 0 0 1 15 20V4Z" />
    </svg>
  );
}

function SeedlingIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M12 21v-9" />
      <path d="M12 12C12 7 8 5 4 5c0 5 3 8 8 8Z" />
      <path d="M12 12c0-4 3-5 7-5 0 4-2 6-7 6Z" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M12 3a9 8 0 1 0 0 16c1 0 1.6-.8 1.6-1.6 0-.4-.2-.8-.4-1.1-.2-.3-.4-.6-.4-1 0-.8.7-1.4 1.5-1.4H16a4 4 0 0 0 4-4c0-3.9-3.6-6.9-8-6.9Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HandsIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="8" cy="7" r="2.6" />
      <circle cx="16" cy="7" r="2.6" />
      <path d="M3.5 19c.5-2.8 2.3-4.5 4.5-4.5s4 1.7 4.5 4.5" />
      <path d="M11.5 19c.5-2.8 2.3-4.5 4.5-4.5s4 1.7 4.5 4.5" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="7" cy="6.5" r="2.2" />
      <circle cx="17" cy="6.5" r="2.2" />
      <path d="M2.7 18c.4-3 2-5 4.3-5s3.9 2 4.3 5" />
      <path d="M12.7 18c.4-3 2-5 4.3-5s3.9 2 4.3 5" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="17" cy="9.5" r="2" />
      <path d="M4 19c.4-3.2 2.3-5.2 5-5.2s4.6 2 5 5.2" />
      <path d="M14.5 15c1.8-.2 3.2 1 3.7 2.6" />
    </svg>
  );
}
