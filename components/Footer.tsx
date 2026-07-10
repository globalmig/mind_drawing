export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-warm/60">
      <div className="mx-auto max-w-[1240px] px-6 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-strong text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 20.5s-7.5-4.6-10-9.4C.4 7.8 2 4 5.8 3.4 8.2 3 10.4 4.1 12 6.3c1.6-2.2 3.8-3.3 6.2-2.9C22 4 23.6 7.8 22 11.1c-2.5 4.8-10 9.4-10 9.4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[16px] font-bold text-foreground">
                마음그린다
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[12.5px] leading-relaxed text-muted">
              정서(EQ) · 인지(IQ) · 사회성(SQ) 통합 심리상담센터
              <br />
              마음을 안전하게 표현하고, 삶을 다시 그려가는 곳
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[12.5px] text-muted sm:flex sm:gap-14">
            <div>
              <p className="font-bold text-foreground">상담 안내</p>
              <p className="mt-3 leading-relaxed">
                평일 10:00 - 19:00
                <br />
                토요일 10:00 - 15:00
                <br />
                일 · 공휴일 휴무
              </p>
            </div>
            <div>
              <p className="font-bold text-foreground">Contact</p>
              <p className="mt-3 leading-relaxed">
                032-000-0000
                <br />
                mindgeurinda@example.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-[11.5px] text-muted">
          <p>사업자등록번호 000-00-00000 · 대표 000 · 인천광역시 연수구</p>
          <p className="mt-1">© 2026 마음그린다. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
