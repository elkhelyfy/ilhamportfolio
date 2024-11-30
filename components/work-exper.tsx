import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function WorkExperience() {
  const data = [
    {
      title: "Winfox services/e-lma",
      date: "07/2024 - 08/2024",
      location: "Casablanca",
      position: "Data Scientist Intern",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">Built anomaly detection systems and a business monitoring chatbot for a financial startup</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Identified data inconsistencies for improved decision-making.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Developed an AI-driven chatbot to monitor company activities</div>
          </div>
        </div>
      ),
    },
    {
      title: "Insea junior-entreprise",
      date: "09/2023 -  Present",
      location: "Rabat",
      position: "Junior Data Scientist",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">Junior Data Scientist at INSEA Junior Enterprise</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Conducted in-depth analysis to uncover insights and trends</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Developed and optimized predictive models to support decision-making</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Created dynamic visual dashboards to present findings and drive actionable insights</div>
          </div>
        </div>
      ),
    },
    {
      title: "Haut Commissariat Du Plan Beni Mallal",
      date: "07/2023 - 07/2023",
      location: "Béni Mellal-Khénifra",
      position: "Data Analyst Intern",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Dimensional Poverty Analysis in the Five Provinces of the Béni Mellal-Khénifra Region Using Power BI</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Analyzed various dimensions of poverty, including education, health, and living conditions.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Focused on trends and disparities across the five provinces in the region. Data Visualization: Leveraged Power BI to create interactive dashboards and reports, highlighting key findings and actionable insights.</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Provided data-driven insights to support regional development strategies.</div>
          </div>
        </div>
      ),
    },
    {
      title: "The sparkls foundation grip",
      date: "04/2023 - 04/2023",
      location: "Rabat",
      position: "Data Scientist Intern",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">Worked on color detection and text recognition in photos and videos using image analysis and OCR techniques</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Developed algorithms to identify and classify colors in multimedia content</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Implemented OCR (Optical Character Recognition) techniques to extract and process text</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Utilized advanced image processing methods to enhance accuracy and performance in visual data analysis</div>
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
