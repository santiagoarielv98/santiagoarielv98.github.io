import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import { AnimatedSection } from "@/components/animated-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { LoadParticles } from "@/components/particles";

export default function Home() {
  return (
    <main>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
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
      <LoadParticles />
    </main>
  );
}
