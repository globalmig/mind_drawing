export default function ReserveSection() {
  return (
    <section id="reserve" className="relative mx-auto max-w-[1240px] px-6 py-24 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-[40px] bg-brand-dark px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -top-20 left-[-8%] h-[300px] w-[300px] rounded-full bg-blue/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-15%] right-[-6%] h-[320px] w-[320px] rounded-full bg-blue/30 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white/90">
            마음그린다와 함께하는 첫걸음
          </span>
          <h2 className="mx-auto mt-6 max-w-xl text-[26px] font-extrabold leading-snug tracking-tight text-white sm:text-[32px]">
            지금, 편안한 마음으로
            <br />
            상담을 시작해보세요
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
            원데이 카운슬링부터 맞춤형 프로그램까지, 마음그린다가 함께합니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#top"
              className="rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-blue-strong shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              원데이 카운슬링
            </a>
            <a
              href="#top"
              className="rounded-full bg-[#FEE500] px-6 py-3.5 text-[15px] font-semibold text-[#3A2E1E] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              카카오 상담
            </a>
            <a
              href="#top"
              className="rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              네이버 예약
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
