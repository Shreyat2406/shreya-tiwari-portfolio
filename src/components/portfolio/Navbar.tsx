import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[min(960px,92%)]" : "w-[min(1080px,94%)]"
      }`}
    >
      <div className="glass-nav rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight pl-2">
          ST<span className="text-muted-foreground">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-xs font-medium px-4 py-1.5 rounded-full glass glow-on-hover"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
