export function Preloader() {
  return (
    <div className="preloader-overlay pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="preloader-mark text-center">
        <p className="font-display text-5xl uppercase tracking-[0.2em] text-white md:text-7xl">SSA</p>
        <p className="mt-3 text-xs tracking-[0.28em] text-zinc-400">SRI SAI ARUN</p>
      </div>
    </div>
  );
}
