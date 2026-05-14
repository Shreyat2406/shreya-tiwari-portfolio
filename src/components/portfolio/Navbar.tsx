import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[min(960px,94%)]" : "w-[min(1080px,96%)]"
      }`}
    >
      <div className="glass-nav rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        <a href="#top" className="text-sm font-semibold tracking-tight pl-2">
          ST<span className="text-muted-foreground">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
              style={{ transition: "color .2s, background .2s" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex text-xs font-medium px-4 py-1.5 rounded-full glass glow-on-hover"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 rounded-full glass inline-flex items-center justify-center"
          >
            {open ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 glass-nav rounded-2xl p-2 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-xl"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
