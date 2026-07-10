import { FiAward, FiShield, FiFileText, FiHeart } from "react-icons/fi";

const ITEMS = [
  {
    title: "임상경력 10년+",
    desc: "축적된 임상 경험과 전문성",
    icon: FiAward,
  },
  {
    title: "국가전문자격 보유",
    desc: "임상심리사 · 상담심리사 등",
    icon: FiShield,
  },
  {
    title: "누적 상담사례 1,000건+",
    desc: "다양한 사례로 쌓아온 노하우",
    icon: FiFileText,
  },
  {
    title: "전국민 마음투자 지원기관",
    desc: "심리상담 바우처 이용 가능",
    icon: FiHeart,
  },
];

export default function CredentialBar() {
  return (
    <section>
      <div className="mx-auto max-w-[1240px] px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue-strong">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[14px] font-bold leading-snug text-foreground">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
