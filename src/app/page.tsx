import Hero from "@/components/hero";
import About from "@/app/_section/about";
import Skills from "@/app/_section/skills";
import Projects from "@/app/_section/projects";
import Resume from "@/app/_section/resume";
import Contact from "@/app/_section/contact";
import { AnimatedSection } from "@/components/animated-section";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Resume />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <ScrollToTop />
    </main>
  );
}
