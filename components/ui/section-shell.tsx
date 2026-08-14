import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, children }: SectionShellProps) {
  return (
    <section id={id} className="relative border-t border-white/10 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          {eyebrow ? (
            <p className="mb-4 text-xs tracking-[0.24em] text-red-400/80">{eyebrow}</p>
          ) : null}
          <h2 className="font-display text-4xl uppercase leading-[0.9] md:text-5xl">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
