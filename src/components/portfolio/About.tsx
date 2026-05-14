import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Crafting practical, intelligent software.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8 lift">
          <p className="text-base leading-relaxed text-muted-foreground">
            I am a B.E Information Technology student at <span className="text-foreground">Atharva College of Engineering</span> with
            Honours in Data Science. My interests lie in Python development, Full Stack MERN
            development, AI/ML, backend systems, and open-source collaboration.
          </p>
        </div>
        <div className="glass rounded-3xl p-8 lift">
          <p className="text-base leading-relaxed text-muted-foreground">
            I enjoy building practical software solutions ranging from machine learning
            applications to full-stack web platforms. I actively participate in hackathons,
            technical communities, and collaborative development programs to improve my
            engineering skills.
          </p>
        </div>
      </div>
    </Section>
  );
}
