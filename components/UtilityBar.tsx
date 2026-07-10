export default function UtilityBar() {
  return (
    <div className="bg-brand">
      <div className="mx-auto flex h-10 max-w-[1240px] items-center justify-end gap-4 px-6 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-1.5 text-[12.5px] font-medium text-white/90 transition-colors hover:text-white"
        >
          <SearchIcon />
          Search
        </a>

        <span className="h-3.5 w-px bg-white/25" />

        <a
          href="#top"
          aria-label="Instagram"
          className="flex h-6 w-6 items-center justify-center rounded-md border border-white/70 text-white/90 transition-colors hover:border-white hover:text-white"
        >
          <InstagramIcon />
        </a>

        <a
          href="#top"
          aria-label="블로그"
          className="flex h-6 w-7 items-center justify-center rounded-full rounded-bl-sm bg-[#FAF6EE] text-[9.5px] font-bold leading-none text-brand-dark"
        >
          blog
        </a>

        <a
          href="#top"
          aria-label="카카오톡 채널"
          className="flex h-6 w-7 items-center justify-center rounded-full rounded-bl-sm bg-[#FEE500] text-[9px] font-bold leading-none text-[#3A2E1E]"
        >
          TALK
        </a>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
