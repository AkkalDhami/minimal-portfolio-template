import ContactSection from "@/components/home/contact-section";
import WorkEduSection from "@/components/home/work-edu-section";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/project-section";
import SkillsSection from "@/components/home/skill-section";
import TestimonialSection from "@/components/home/testimonial-section";
import FooterSection from "@/components/home/footer-section";

function page() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <WorkEduSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default page;
