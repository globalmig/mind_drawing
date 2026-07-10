import { FaBrain, FaCircleNodes, FaHeart, FaUserGroup } from "react-icons/fa6";

const CIRCLES = [
  {
    key: "eq",
    label: "정서 (EQ)",
    desc: "감정을 이해하고\n안전하게 표현합니다.",
    blob: "left-1/2 -top-[7%] -translate-x-1/2",
    content: "left-1/2 top-[2%] -translate-x-1/2",
    color: "bg-rose/60",
    icon: <FaHeart className="h-7 w-7" />,
    iconColor: "text-rose-strong",
  },
  {
    key: "iq",
    label: "인지 (IQ)",
    desc: "생각과 행동을 이해하고\n자기조절 능력을 키웁니다.",
    blob: "-left-[5%] -bottom-[7%]",
    content: "left-[20%] bottom-[2%] -translate-x-1/2",
    color: "bg-blue/55",
    icon: <FaBrain className="h-7 w-7" />,
    iconColor: "text-blue-strong",
  },
  {
    key: "sq",
    label: "사회성 (SQ)",
    desc: "관계 속에서 공감하고\n건강하게 성장합니다.",
    blob: "-right-[5%] -bottom-[7%]",
    content: "left-[80%] bottom-[2%] -translate-x-1/2",
    color: "bg-brand/40",
    icon: <FaUserGroup className="h-7 w-7" />,
    iconColor: "text-brand-dark",
  },
];

export default function ApproachSection() {
  return (
    <section className="bg-linear-to-b from-white to-background">
      <div className="mx-auto max-w-[1240px] px-6 py-24 sm:px-8 lg:px-10">
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

        <div className="relative mx-auto mt-20 aspect-square w-full max-w-[600px]">
          {CIRCLES.map((c) => (
            <div
              key={c.key}
              className={`absolute h-[70%] w-[70%] rounded-full ${c.color} mix-blend-multiply ${c.blob}`}
            />
          ))}

          {CIRCLES.map((c) => (
            <div
              key={c.key}
              className={`absolute z-10 flex w-[32%] flex-col items-center text-center ${c.content}`}
            >
              <span className={`flex h-16 w-16 items-center justify-center rounded-full bg-surface shadow-sm ${c.iconColor}`}>
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

          <div className="absolute left-1/2 top-1/2 z-20 flex h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full bg-surface text-center shadow-[0_16px_32px_-14px_rgba(43,38,32,0.4)]">
            <span className="text-brand-dark">
              <FaCircleNodes className="h-6 w-6" />
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
      </div>
    </section>
  );
}
