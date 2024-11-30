import AvailabilityTag from "@/components/availability-tag";
import { Education } from "@/components/education";
import Hero from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { WorkExperience } from "@/components/work-exper";

export default function Home() {
  return (
    <div className="w-fit mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <AvailabilityTag />
      <Hero />
      <WorkExperience />
      <Education />
      <ProjectCard />
    </div>
  );
}
