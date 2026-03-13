import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-20 md:gap-24">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

