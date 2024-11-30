import React from 'react'
import { Cover } from "@/components/ui/cover";
import FloatingTechStack from './floating-tech-stack';


const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center font-[family-name:var(--font-geist-sans)] gap-8 px-6 mx-10 min-h-[300px]">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-4xl lg:text-lg font-semibold max-w-7xl mx-auto text-left mt-6 relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          HEY, I&apos;M ILHAM A <Cover>Data Scientist</Cover>
        </h1>
        <p>I’m a third-year Data Science student at INSEA, passionate about using data analytics and machine learning to solve complex problems. I specialize in turning data into actionable insights that drive strategic decisions and impactful solutions.</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <FloatingTechStack />
      </div>
    </section>
  );
}

export default Hero;