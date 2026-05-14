import { Section } from "./Section";

const groups = [
  { title: "Programming Languages", items: ["Python", "C++", "JavaScript", "TypeScript"] },
  { title: "Frameworks & Technologies", items: ["FastAPI", "Django", "React.js", "Node.js", "Express.js", "REST APIs", "MERN Stack"] },
  { title: "Databases", items: ["MongoDB", "SQL"] },
  { title: "Data & AI", items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Power BI"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "Jupyter", "Google Colab", "VS Code"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The toolkit behind the work.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-3xl p-7 lift">
            <h3 className="text-sm font-semibold mb-5 text-foreground/90">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip text-xs px-3 py-1.5 rounded-full text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
