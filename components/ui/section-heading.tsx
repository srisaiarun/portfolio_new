type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="mb-4 text-xs tracking-[0.26em] text-red-400/80">{label}</p>
      <h2 className="font-display text-4xl uppercase leading-[0.95] text-white md:text-6xl">{title}</h2>
      <p className="mt-5 text-base text-zinc-300 md:text-lg">{description}</p>
    </header>
  );
}
