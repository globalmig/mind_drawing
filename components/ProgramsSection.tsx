import {
  FaBrain,
  FaHandshake,
  FaPalette,
  FaPeopleRoof,
  FaSeedling,
  FaUserGroup,
} from "react-icons/fa6";

const PROGRAMS = [
  {
    title: "심리평가",
    desc: "종합심리검사로 정서·인지·행동을 객관적으로 이해합니다.",
    icon: <FaBrain className="h-8 w-8" />,
    chip: "bg-terracotta-soft text-terracotta",
  },
  {
    title: "개인상담",
    desc: "안전한 관계 안에서 나를 이해하고 변화를 만들어갑니다.",
    icon: <FaSeedling className="h-8 w-8" />,
    chip: "bg-blue-soft text-blue-strong",
  },
  {
    title: "자기조절 기반 인지학습치료",
    desc: "생각과 행동을 조절하는 힘을 키우는 학습치료입니다.",
    icon: <FaPalette className="h-8 w-8" />,
    chip: "bg-brand-light text-brand",
  },
  {
    title: "사회성 집단프로그램",
    desc: "또래 관계 속에서 공감과 소통 능력을 연습합니다.",
    icon: <FaHandshake className="h-8 w-8" />,
    chip: "bg-blue-soft text-blue-strong",
  },
  {
    title: "가족 · 부부상담",
    desc: "가족 안에서의 관계와 소통 방식을 함께 살펴봅니다.",
    icon: <FaPeopleRoof className="h-8 w-8" />,
    chip: "bg-terracotta-soft text-terracotta",
  },
  {
    title: "집단상담 프로그램",
    desc: "비슷한 어려움을 가진 사람들과 함께 성장합니다.",
    icon: <FaUserGroup className="h-8 w-8" />,
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
              <span className={`flex h-16 w-16 items-center justify-center rounded-2xl ${p.chip}`}>
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
