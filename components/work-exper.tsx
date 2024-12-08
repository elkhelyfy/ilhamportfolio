import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function WorkExperience() {
  const data = [
    {
      title: "Winfox services/e-lma",
      date: "July 2024 – August 2024",
      location: "Casablanca",
      position: "Data Scientist Intern",
      content: (
        <div>
          <div className=" mt-2 space-y-1">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Developed an anomaly detection system, achieving 95% accuracy in identifying irregularities in data.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Implemented an NLP-based chatbot, increasing user engagement for activity tracking by 30%.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Conducted an analysis of corporate data flows, identifying critical bottlenecks.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Presented the results in an internal meeting, receiving positive feedback from management.</div>
          </div>
        </div>
      ),
    },
    {
      title: "INSEA Junior-Enterprise",
      date: "September 2023 – Present",
      location: "Rabat",
      position: "Freelance Data Scientist",
      content: (
        <div>
          <div className="mt-2 space-y-1">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Developed Machine Learning models, improving forecast accuracy by 10% for client projects.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Created visualization dashboards, enhancing stakeholder decision-making by 25%.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Performed client data analysis, uncovering actionable insights to optimize market strategies.</div>
          </div>
        </div>
      ),
    },
    {
      title: "High Commission for Planning (Haut Commissariat au Plan)",
      date: "July 2023 – July 2023",
      location: "Béni Mellal-Khénifra",
      position: "Data Analyst Intern",
      content: (
        <div>
          <div className="mt-2 space-y-1">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Analyzed data on regional poverty, identifying key socio-economic disparities in five provinces.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Developed Power BI dashboards, making data accessible to policymakers with a 40% improvement in usability.</div>
          </div>
        </div>
      ),
    },
    {
      title: "The Sparks Foundation (GRIP)",
      date: "April 2023 – April 2023",
      location: "Remote",
      position: "Data Scientist Intern",
      content: (
        <div>
          <div className="mt-2 space-y-1">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Developed an image processing model, achieving 92% accuracy in color detection.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Implemented OCR techniques, improving text recognition efficiency in images by 35%.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Conducted an analysis of multimedia datasets, identifying trends in visual content usage.</div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} section="My Professional Journey" />
    </div>
  );
}
