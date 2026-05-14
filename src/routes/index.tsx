import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shreya Tiwari — Python & MERN Developer | AI/ML" },
      { name: "description", content: "Portfolio of Shreya Tiwari — Python Developer, Full Stack MERN Developer, and AI/ML enthusiast based in Thane, India." },
      { property: "og:title", content: "Shreya Tiwari — Developer Portfolio" },
      { property: "og:description", content: "Python & Full Stack MERN developer with experience in ML, backend, and open-source." },
    ],
  }),
});

function Index() {
  return (
    <>
      <Loader />
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
