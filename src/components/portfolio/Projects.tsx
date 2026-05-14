import { Section } from "./Section";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const featured = [
  {
    name: "Lawsakhi",
    tag: "Team Project",
    title: "Legal Awareness & Women Safety Platform",
    description:
      "AI-enabled legal awareness and women safety platform built as a semester team project. Worked on AI chatbot and agentic AI functionalities along with SOS support and anonymous reporting features.",
    stack: ["FastAPI", "JavaScript", "TypeScript", "MongoDB"],
    github: "https://github.com/Shreyat2406/Lawsakhi02",
  },
  {
    name: "House Price Prediction",
    tag: "Individual Project",
    title: "Regression-based ML system",
    description:
      "Machine learning project for predicting house prices using regression algorithms, preprocessing pipelines, and exploratory data analysis techniques.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Shreyat2406/House-Price-Prediction",
  },
  {
    name: "Aasha",
    tag: "Team Project",
    title: "AI Cyber Safety Companion",
    description:
      "AI-based cyber safety platform helping users identify scams and receive cybersecurity guidance. Implemented interactive assistance features and contributed to responsive frontend development.",
    stack: ["React.js", "JavaScript", "AI Integration"],
    live: "https://aasha-sandy.vercel.app/",
  },
];

const others = [
  { name: "ToDo App", url: "https://github.com/Shreyat2406/ToDo", live: false },
  { name: "Recipe Generator", url: "https://healthy-recipegenerator.netlify.app/", live: true },
  { name: "QR Code Generator", url: "https://github.com/Shreyat2406/QRcode", live: false },
  { name: "Zerodha Clone", url: "https://zerodha-clone-mocha-ten.vercel.app/", live: true },
  { name: "Heavy Metal Pollution Dashboard", url: "https://v0-heavy-metal-pollution-dashboard.vercel.app/", live: true },
  { name: "Clown Frontend Project", url: "https://clown-ruby.vercel.app/", live: true },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Featured projects & experiments.">
      <div className="space-y-6">
        {featured.map((p) => (
          <article key={p.name} className="glass rounded-[2rem] p-8 sm:p-10 lift relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.tag}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">{p.title}</p>
                <p className="text-base leading-relaxed text-muted-foreground/90 max-w-2xl">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col gap-3 md:items-end md:justify-end">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="glass glow-on-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium">
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="bg-white text-black hover:bg-white/90 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Other Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((o) => (
            <a key={o.name} href={o.url} target="_blank" rel="noreferrer"
              className="glass rounded-2xl p-5 lift flex items-center justify-between group">
              <div>
                <p className="text-sm font-medium">{o.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{o.live ? "Live Demo" : "GitHub"}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
