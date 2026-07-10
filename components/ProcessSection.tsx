import Image from "next/image";

const STEPS = [
  {
    no: "01",
    title: "원데이 카운슬링 · 초기상담",
    desc: "현재의 어려움과 강점, 상담의 필요를 함께 살펴봅니다.",
    color: "text-terracotta",
    icon: "/images/3d-icon/meeting.png",
  },
  {
    no: "02",
    title: "객관적 평가 및 통합 분석",
    desc: "종합심리검사 및 개별검사(필요 시)를 통해 정서, 인지, 행동, 관계를 객관적으로 이해합니다.",
    color: "text-blue",
    icon: "/images/3d-icon/presentation.png",
  },
  {
    no: "03",
    title: "개인별 변화 목표 및 방향 설정",
    desc: "개인에게 가장 필요한 변화 목표와 우선순위를 함께 설정합니다.",
    color: "text-terracotta",
    icon: "/images/3d-icon/checklist.png",
  },
  {
    no: "04",
    title: "맞춤형 상담 및 프로그램 진행",
    desc: "개인상담, 사회성 프로그램, 인지학습치료, 부모·가족상담 등 필요한 개입을 진행합니다.",
    color: "text-blue",
    icon: "/images/3d-icon/group.png",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-[1240px] px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-bold tracking-wide text-blue-strong">
          마음그린다 상담 프로세스
        </p>
        <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[32px]">
          충분한 이해에서 변화는 시작됩니다
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          체계적인 상담 프로세스로 현재의 어려움을 이해하고,
          <br className="hidden sm:block" />
          개인에게 꼭 맞는 방향으로 함께 나아갑니다.
        </p>
      </div>

      <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <div key={step.no} className="flex flex-col items-center">
            <Image
              src={step.icon}
              alt=""
              width={128}
              height={128}
              className="h-32 w-32 object-contain drop-shadow-lg"
            />
            <div className="relative mt-2 h-full w-full rounded-3xl border border-line bg-surface p-7 shadow-[0_16px_32px_-24px_rgba(43,38,32,0.35)]">
              <span className={`block text-[26px] font-extrabold ${step.color}`}>
                {step.no}
              </span>
              <h3 className="mt-3 text-[16px] font-bold leading-snug text-foreground">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {step.desc}
              </p>
              {i < STEPS.length - 1 && (
                <span className="pointer-events-none absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-line lg:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-14 text-center text-[16px] font-semibold text-blue-strong">
        정확한 이해는 올바른 방향을 만들고, 올바른 방향은 건강한 변화를 만듭니다.
      </p>
    </section>
  );
}
