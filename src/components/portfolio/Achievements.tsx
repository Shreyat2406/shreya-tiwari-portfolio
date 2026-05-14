import { Section } from "./Section";
import { Trophy, Award, Star, GraduationCap, Target } from "lucide-react";

const items = [
  { Icon: Star, text: "Selected for GirlScript Summer of Code (GSSoC) 2026" },
  { Icon: Trophy, text: "Top 10 teams among 400+ participants — HerSpark Ideathon 2025" },
  { Icon: Target, text: "Top 30 teams — SIH Internal Hackathon 2025" },
  { Icon: Award, text: "ISRO AIML for Geodata Analysis Certification" },
  { Icon: GraduationCap, text: "Secured 95.33 percentile in MHT-CET 2023" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Milestones along the way.">
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(({ Icon, text }) => (
          <div key={text} className="glass rounded-2xl p-6 lift flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <p className="text-sm text-muted-foreground/95 leading-relaxed pt-2">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
