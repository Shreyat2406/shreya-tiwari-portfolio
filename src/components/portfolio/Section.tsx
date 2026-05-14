import { type ReactNode } from "react";

export function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative px-5 sm:px-6 py-14 sm:py-20 max-w-6xl mx-auto">
      <div className="mb-8 sm:mb-10">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">{eyebrow}</p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gradient max-w-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
