"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./badge";
import React from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string[];
    link: string;
    technologies: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-5", className)}>
      {items.map((item, idx) => (
        <Link href="#" key={item?.link} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardFoter>{item.technologies}</CardFoter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("rounded-2xl h-full w-full p-2 overflow-hidden bg-gray-100 border border-transparent dark:border-white/[0.2] group-hover:border-gray-400 relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-black font-outfit font-bold tracking-wide mt-1", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <ul className={cn("max-w-md text-gray-500 list-disc list-inside dark:text-gray-400 mt-4 font-outfit tracking-wide leading-relaxed text-sm", className)}>
      {React.Children.map(children, (child, index) => (
        <li key={index} className="flex place-items-baseline">
          <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          {child}
        </li>
      ))}
    </ul>
  );
};
export const CardFoter = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("max-w-md  list-disc list-inside mt-4 font-outfit tracking-wide leading-relaxed text-sm flex flex-wrap gap-2", className)}>
      {React.Children.map(children, (tech, index) => (
        <Badge key={index} variant="outline" className="text-xs font-medium text-white bg-gray-700 border border-gray-800 rounded-full px-2 py-1">
          {tech}
        </Badge>
      ))}
    </div>
  );
};