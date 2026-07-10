import Image from "next/image";
import {
  FaBaby,
  FaBatteryEmpty,
  FaBolt,
  FaChild,
  FaCloud,
  FaCompass,
  FaComment,
  FaFaceFrown,
  FaFaceMeh,
  FaFire,
  FaHandHoldingHeart,
  FaHeartCrack,
  FaHeartPulse,
  FaMedal,
  FaNotesMedical,
  FaRoute,
  FaSchool,
  FaSchoolCircleExclamation,
  FaUser,
  FaUserGraduate,
  FaUserGroup,
} from "react-icons/fa6";

const GROUPS = [
  {
    age: "영유아",
    range: "0~7세",
    desc: "발달 · 정서 · 관계의 건강한 성장을 돕습니다.",
    tags: [
      { label: "발달지연", icon: <FaNotesMedical /> },
      { label: "분리불안", icon: <FaHeartCrack /> },
      { label: "언어발달", icon: <FaComment /> },
      { label: "또래관계", icon: <FaUserGroup /> },
    ],
    color: "gold" as const,
    icon: <FaBaby className="h-8 w-8" />,
  },
  {
    age: "아동",
    range: "8~13세",
    desc: "학교와 일상 속 어려움을 함께 이해합니다.",
    tags: [
      { label: "ADHD", icon: <FaBolt /> },
      { label: "사회성", icon: <FaUserGroup /> },
      { label: "감정조절", icon: <FaHeartPulse /> },
      { label: "친구관계", icon: <FaUserGroup /> },
      { label: "틱", icon: <FaFaceMeh /> },
      { label: "학교적응", icon: <FaSchool /> },
    ],
    color: "blue" as const,
    icon: <FaChild className="h-8 w-8" />,
  },
  {
    age: "청소년",
    range: "14~19세",
    desc: "감정과 관계, 자기이해의 성장을 돕습니다.",
    tags: [
      { label: "우울·불안", icon: <FaCloud /> },
      { label: "등교거부", icon: <FaSchoolCircleExclamation /> },
      { label: "무기력", icon: <FaBatteryEmpty /> },
      { label: "친구관계", icon: <FaUserGroup /> },
      { label: "자존감", icon: <FaMedal /> },
      { label: "진로 고민", icon: <FaCompass /> },
    ],
    color: "neutral" as const,
    icon: <FaUserGraduate className="h-8 w-8" />,
  },
  {
    age: "성인",
    range: "20세~",
    desc: "삶의 어려움 속에서 회복과 변화를 함께합니다.",
    tags: [
      { label: "우울·불안·공황", icon: <FaFaceFrown /> },
      { label: "스트레스·번아웃", icon: <FaFire /> },
      { label: "성인 ADHD", icon: <FaBolt /> },
      { label: "애착 및 대인관계", icon: <FaHandHoldingHeart /> },
      { label: "자기이해와 삶의 방향", icon: <FaRoute /> },
    ],
    color: "brand" as const,
    icon: <FaUser className="h-8 w-8" />,
  },
];

const COLOR_MAP = {
  gold: { soft: "bg-gold-soft", tint: "bg-gold-soft/40", text: "text-gold" },
  blue: { soft: "bg-blue-soft", tint: "bg-blue-soft/40", text: "text-blue-strong" },
  neutral: { soft: "bg-surface-warm", tint: "bg-surface-warm/60", text: "text-foreground" },
  brand: { soft: "bg-brand-light", tint: "bg-brand-light/40", text: "text-brand" },
};

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <Image
        src="/images/bg_flowers.png"
        alt=""
        width={996}
        height={303}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full select-none"
      />
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
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
                className="flex flex-col items-center overflow-hidden rounded-3xl border border-line bg-surface text-center transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(43,38,32,0.35)]"
              >
                <div
                  className={`flex w-full flex-col items-center gap-3 border-b border-line px-7 pb-6 pt-8 ${colors.soft}`}
                >
                  <span className={colors.text}>{group.icon}</span>
                  <span
                    className={`inline-flex w-fit items-center rounded-full bg-surface/70 px-3 py-1 text-[12px] font-bold ${colors.text}`}
                  >
                    {group.range}
                  </span>
                  <h3 className="text-[19px] font-extrabold text-foreground">
                    {group.age}
                  </h3>
                </div>

                <div
                  className={`flex w-full flex-1 flex-col items-center gap-5 px-7 pb-7 pt-6 ${colors.tint}`}
                >
                  <p className="text-[13.5px] leading-relaxed text-muted">
                    {group.desc}
                  </p>
                  <div className="grid w-full grid-cols-2">
                    {group.tags.map((tag, i) => {
                      const totalRows = Math.ceil(group.tags.length / 2);
                      const row = Math.floor(i / 2);
                      const isLeftCol = i % 2 === 0;
                      const hasRightSibling = i + 1 < group.tags.length;
                      const isLastRow = row === totalRows - 1;
                      return (
                        <div
                          key={tag.label}
                          className={`flex flex-col items-center gap-1.5 px-2 py-3 text-center ${
                            isLeftCol && hasRightSibling ? "border-r border-line" : ""
                          } ${!isLastRow ? "border-b border-line" : ""}`}
                        >
                          <span className={`text-[18px] ${colors.text}`}>
                            {tag.icon}
                          </span>
                          <span className="text-[11.5px] font-medium leading-snug text-muted">
                            {tag.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
