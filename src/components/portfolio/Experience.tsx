import { Section } from "./Section";

const experiences = [
  {
    role: "Open Source Intern",
    org: "Vicharanashala Lab, IIT Ropar",
    date: "May 2026 – July 2026",
    points: [
      "Selected for Vicharanashala Summership 2026 at IIT Ropar",
      "Contributing to live open-source projects under CSE mentorship",
      "Working in a collaborative remote development environment",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "GirlScript Summer of Code (GSSoC)",
    date: "2026",
    points: [
      "Selected for GirlScript Summer of Code (GSSoC)",
      "Contributing to open-source repositories and collaborative projects",
      "Improving practical GitHub workflow and software engineering skills",
    ],
  },
  {
    role: "Web Team Member",
    org: "GDGC ACE",
    date: "May 2024 – May 2025",
    points: [
      "Participated in collaborative web development activities and technical events",
      "Worked on community-driven projects and development workshops",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="A timeline of building & contributing.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div className="space-y-10">
          {experiences.map((e, i) => (
            <div
              key={e.role}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
              <div className={`glass rounded-3xl p-7 lift ml-12 md:ml-0 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <p className="text-xs text-muted-foreground mb-2">{e.date}</p>
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">{e.org}</p>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground/90 flex gap-2">
                      <span className="text-foreground/40 mt-1.5 w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
