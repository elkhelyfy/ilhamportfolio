import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Education() {
  const data = [
    {
      title: "Engineer in Data Science",
      date: "09/2022 - Present",
      location: "Rabat",
      position: "National Institute of Statistics and Applied Economics",
      content: "",
    },
    {
      title: "Lycée Mohammed V Béni Mellal",
      date: "09/2020 -  07/2023",
      location: "Rabat",
      position: "Lycée Mohammed V Béni Mellal",
      content: "",
    },
    {
      title: "Preparatory Classes in Mathematics and Physics",
      date: "09/2019 -  06/2020",
      location: "Rabat",
      position: " Lycée Moulay Rachid",
      content: "",
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} section="My Education" />
    </div>
  );
}
