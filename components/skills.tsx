"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Atom, Database, Globe, ChartBar, Code, Cog } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skills = [
  {
    name: "Data Science",
    icon: Atom,
    color: "bg-blue-500",
    techs: ["Pandas", "NumPy", "seaborn", "matplotlib", "Hadoop", "Spark", "Hive", "datalake", "datawarehouse", "ETL/ELT", "APIS", "Probabilités et statistiques", "Intelligence Artificielle", "traitement du langage naturel (NLP)", "Gen AI models", "RAG implementation", "prompt engineering", "computer Vision", "LLM"],
  },
  {
    name: "Database",
    icon: Database,
    color: "bg-green-500",
    techs: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    name: "DevOps",
    icon: Globe,
    color: "bg-purple-500",
    techs: ["Docker", "Kubernetes", "Git"],
  },
  {
    name: "Visualization and Dashboards",
    icon: ChartBar,
    color: "bg-orange-500",
    techs: ["Tableau", "Power BI"],
  },
  {
    name: "Programming Languages",
    icon: Code,
    color: "bg-yellow-500",
    techs: ["Python", "R", "SQL"],
  },
  {
    name: "Machine Learning Libraries",
    icon: Cog,
    color: "bg-indigo-500",
    techs: ["Keras", "Scikit-learn", "NLTK", "OpenCV", "scipy", "textblob", "TensorFlow", "PyTorch"],
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(skills[0]);

  return (
    <div className="w-full px-8 mx-auto  bg-background font-outfit">
      <h2 className="text-2xl md:text-4xl text-black dark:text-white max-w-4xl py-10">Professional Skills</h2>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {skills.map((skill) => (
          <Button key={skill.name} variant={activeSkill.name === skill.name ? "default" : "outline"} className="h-24 flex flex-col items-center justify-center gap-2" onClick={() => setActiveSkill(skill)}>
            <skill.icon className={`w-8 h-8 ${skill.color} text-white rounded-full p-1`} />
            <span>{skill.name}</span>
          </Button>
        ))}
      </div>
      <Card className="w-full">
        <CardContent className="p-6">
          <motion.div key={activeSkill.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-semibold mb-4">{activeSkill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {activeSkill.techs.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
