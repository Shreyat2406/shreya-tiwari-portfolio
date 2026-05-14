import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const items = [
  { Icon: Mail, label: "Email", value: "shreya.t2406@gmail.com", href: "mailto:shreya.t2406@gmail.com" },
  { Icon: Github, label: "GitHub", value: "github.com/Shreyat2406", href: "https://github.com/Shreyat2406" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shreya-tiwari", href: "https://linkedin.com/in/shreya-tiwari" },
  { Icon: Phone, label: "Phone", value: "+91 8928588336", href: "tel:+918928588336" },
  { Icon: MapPin, label: "Location", value: "Thane, Maharashtra, India", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 max-w-6xl mx-auto">
      <div className="glass-strong rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at center top, rgba(255,255,255,0.08), transparent 70%)" }} />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Get in touch</p>
        <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gradient max-w-3xl mx-auto">
          Let's build something thoughtful together.
        </h2>
        <p className="mt-5 text-base text-muted-foreground max-w-xl mx-auto">
          Open to internships, collaborations, and impactful open-source work.
        </p>

        <a href="mailto:shreya.t2406@gmail.com"
          className="mt-9 inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-7 py-3.5 rounded-full text-sm font-medium transition-colors shadow-[0_0_40px_rgba(255,255,255,0.18)]">
          <Mail className="w-4 h-4" /> Say Hello
        </a>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
          {items.map(({ Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="glass rounded-2xl p-5 lift flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-sm truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-16 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shreya Tiwari · Crafted with care.
      </footer>
    </section>
  );
}
