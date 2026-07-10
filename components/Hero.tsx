import HeroSlider from './HeroSlider';

const HEADLINE_WORDS: { text: string; highlight?: boolean; break?: boolean }[] = [
  { text: '마음을' },
  { text: '안전하게' },
  { text: '표현하고,' },
  { break: true, text: '' },
  { text: '삶을' },
  { text: '다시' },
  { text: '그려가는', highlight: true },
  { text: '곳' },
];

export default function Hero() {
  let delayIndex = 0;

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      <HeroSlider />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-semibold tracking-tight text-brand-dark ring-1 ring-white/25 backdrop-blur-sm [text-shadow:0_1px_4px_rgba(255,255,255,0.7)]">
            정서(EQ) · 인지(IQ) · 사회성(SQ) 통합 심리상담센터
          </span>

          <h1 className="mt-6 text-[38px] font-extrabold leading-[1.28] tracking-tight text-brand-dark [text-shadow:0_2px_10px_rgba(255,255,255,0.75)] sm:text-[46px] lg:text-[54px]">
            {HEADLINE_WORDS.map((word, i) =>
              word.break ? (
                <br key={`br-${i}`} />
              ) : (
                <span key={`${word.text}-${i}`}>
                  <span className="inline-block overflow-hidden align-bottom">
                    <span
                      className={`inline-block animate-word-reveal ${word.highlight ? 'text-rose-strong' : ''}`}
                      style={{ animationDelay: `${delayIndex++ * 90}ms` }}
                    >
                      {word.text}
                    </span>
                  </span>{' '}
                </span>
              ),
            )}
          </h1>

          <p className="mt-6 max-w-xl text-[16.5px] leading-[1.75] text-brand-dark [text-shadow:0_1px_6px_rgba(255,255,255,0.75)] sm:text-[17.5px]">
            영유아 · 아동 · 청소년 · 성인 · 가족의 정서, 인지, 관계를
            통합적으로 이해하고{' '}
            <br className="hidden sm:block" />
            각자에게 필요한 변화의 방향을 함께 만들어갑니다.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#reserve"
              className="rounded-full bg-rose-strong px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(217,93,132,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              원데이 카운슬링
            </a>
            <a
              href="#reserve"
              className="flex items-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-[15px] font-semibold text-[#3A2E1E] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              카카오 상담
            </a>
            <a
              href="#reserve"
              className="flex items-center gap-2 rounded-full border border-brand-dark/30 bg-white/70 px-6 py-3.5 text-[15px] font-semibold text-brand-dark backdrop-blur-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              네이버 예약
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
