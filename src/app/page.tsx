import ContactSection from "@/components/home/contact-section";
import ExperienceSection from "@/components/home/experience-section";
import CoolHeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/project-section";
import SkillsSection from "@/components/home/skill-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import FooterSection from "@/components/home/footer-section";

function page() {
  return (
    <>
      <CoolHeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default page;
