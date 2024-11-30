import AvailabilityTag from "@/components/availability-tag";
import Certifications from "@/components/certifications";
import { Education } from "@/components/education";
import Hero from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import Skills from "@/components/skills";
import { WorkExperience } from "@/components/work-exper";

export default function Home() {
  return (
    <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-5 gap-x-10 mt-10 mb-5">
      <AvailabilityTag />
      <Hero />
      <WorkExperience />
      <Education />
      <ProjectCard />
      <Certifications />
      <Skills />
    </div>
  );
}
