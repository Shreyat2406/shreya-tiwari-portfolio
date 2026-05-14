import { Github, Linkedin, Mail, Download, FolderGit2, ArrowUpRight } from "lucide-react";

const badges = ["Python", "MERN Stack", "AI/ML", "FastAPI", "React.js", "Open Source"];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-gradient leading-[1.05] animate-fade-up">
          Shreya Tiwari
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground font-medium animate-fade-up delay-100">
          Python Developer · Full Stack MERN · AI/ML Enthusiast
        </p>

        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground/90 leading-relaxed animate-fade-up delay-200">
          Python and Full Stack MERN developer with experience in machine learning, backend
          development, and open-source collaboration. Skilled in FastAPI, React.js, Node.js,
          and database technologies with a strong interest in AI/ML and problem solving.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up delay-300">
          {badges.map((b, i) => (
            <span
              key={b}
              className="glass px-4 py-2 text-xs font-medium rounded-full animate-float"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up delay-400">
          <a href="#projects" className="glass glow-on-hover px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
            <FolderGit2 className="w-4 h-4" /> View Projects
          </a>
          <a href="/resume.pdf" download className="bg-white text-black hover:bg-white/90 transition-colors px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a href="https://github.com/Shreyat2406" target="_blank" rel="noreferrer" className="glass glow-on-hover px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="#contact" className="glass glow-on-hover px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-5 animate-fade-up delay-500">
          {[
            { Icon: Github, href: "https://github.com/Shreyat2406", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/in/shreya-tiwari", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:shreya.t2406@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full glass glow-on-hover inline-flex items-center justify-center"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
