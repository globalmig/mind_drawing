import {
  FiAward,
  FiShield,
  FiUsers,
  FiFileText,
  FiHeart,
  FiMapPin,
} from "react-icons/fi";

const ITEMS = [
  {
    title: "임상경력 10년+",
    desc: "축적된 임상 경험과 전문성",
    icon: FiAward,
    soft: "bg-blue-soft",
    text: "text-blue-strong",
  },
  {
    title: "국가전문자격 보유",
    desc: "임상심리사 · 정신건강임상심리사\n청소년상담사 · 상담심리사 · 전문상담사",
    icon: FiShield,
    soft: "bg-blue-soft",
    text: "text-blue-strong",
  },
  {
    title: "집단프로그램 운영 200회+",
    desc: "체계적으로 설계된 프로그램 운영",
    icon: FiUsers,
    soft: "bg-blue-soft",
    text: "text-blue-strong",
  },
  {
    title: "누적 상담사례 1,000건+",
    desc: "다양한 사례를 통해 쌓아온 노하우",
    icon: FiFileText,
    soft: "bg-blue-soft",
    text: "text-blue-strong",
  },
  {
    title: "전국민 마음투자 지원기관",
    desc: "심리상담 바우처 이용 가능",
    icon: FiHeart,
    soft: "bg-blue-soft",
    text: "text-blue-strong",
  },
  {
    title: "국가기관 및 지역사회 연계기관",
    desc: "서울경찰청 · 영등포청소년상담복지센터\n영등포 보건소 · 정신건강복지센터",
    icon: FiMapPin,
    soft: "bg-blue-soft",
    text: "text-blue-strong",
  },
];

export default function TrustStrip() {
  return (
    <section id="trust" className="border-y border-line bg-blue-soft">
      <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-wide text-blue-strong">
            MIND GEURINDA
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[30px]">
            마음그린다의 전문성과 신뢰
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 bg-surface px-6 py-8 text-center sm:px-7"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full ${item.soft} ${item.text}`}
              >
                <item.icon className="h-5 w-5" />
              </span>
              <p className="text-[15.5px] font-bold leading-snug text-foreground">
                {item.title}
              </p>
              <p className="whitespace-pre-line text-[12.5px] leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
