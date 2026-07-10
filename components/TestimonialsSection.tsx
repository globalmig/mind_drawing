const REVIEWS = [
  {
    center: "인천송도심리상담센터",
    title: "유아상담 자립특기 이야기해 드렸는데",
    body: "아이의 마음을 먼저 읽어주시고, 저희 부부도 함께 이해할 수 있도록 안내해 주셔서 감사했습니다. 상담 이후 아이의 표정이 훨씬 편안해졌어요.",
    author: "site 이 O O",
    chip: "bg-terracotta-soft text-terracotta",
  },
  {
    center: "인천송도심리상담센터",
    title: "유아 자립특기 이야기해 드렸는데",
    body: "체계적인 검사와 상담으로 아이의 강점과 어려움을 정확히 파악해 주셨어요. 방향을 잡아주셔서 마음이 한결 가벼워졌습니다.",
    author: "site 김 O O",
    chip: "bg-blue-soft text-blue-strong",
  },
  {
    center: "울산남구심리상담센터",
    title: "표지 지향할 대로 우울감이 있어서요",
    body: "제 이야기를 충분히 들어주시고, 판단 없이 함께 고민해 주셔서 안전하다는 느낌을 받았습니다. 조금씩 제 삶의 방향을 찾아가고 있어요.",
    author: "site 박 O O",
    chip: "bg-terracotta-soft text-terracotta",
  },
  {
    center: "울산남구심리상담센터",
    title: "표지 지향할 대로 무기력함이 심했는데",
    body: "선생님과의 상담을 통해 제 감정을 있는 그대로 표현하는 법을 배웠습니다. 지금은 예전보다 훨씬 안정적인 일상을 보내고 있어요.",
    author: "site 최 O O",
    chip: "bg-blue-soft text-blue-strong",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="bg-brand-mist bg-[linear-gradient(rgba(255,255,255,0.72),rgba(255,255,255,0.72)),url('/images/bg_ground.webp')] bg-cover bg-center bg-no-repeat py-24"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-wide text-blue-strong">
            REAL STORIES
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-foreground sm:text-[32px]">
            진짜 고객의 진짜 후기
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border border-line bg-surface p-6"
            >
              <span className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-bold ${review.chip}`}>
                {review.center}
              </span>
              <p className="mt-4 text-[14.5px] font-bold leading-snug text-foreground">
                &ldquo;{review.title}&rdquo;
              </p>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted">
                {review.body}
              </p>
              <p className="mt-5 text-[12px] font-medium text-muted">
                {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#reviews"
            className="rounded-full border border-line bg-surface px-6 py-3 text-[14px] font-semibold text-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            이용후기 더 보기
          </a>
        </div>
      </div>
    </section>
  );
}
