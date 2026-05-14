import { type ReactNode } from "react";

export function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-28 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{eyebrow}</p>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gradient max-w-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
