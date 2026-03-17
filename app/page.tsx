import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { AboutSection } from "../sections/AboutSection";
import { SkillsSection } from "../sections/SkillsSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-20 md:gap-24">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
