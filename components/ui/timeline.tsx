"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  data: {
    title: string;
    date: string;
    location: string;
    position: string;
    content: React.ReactNode; // Allows JSX elements
  }[];
  section: string;
}

export const Timeline = ({ data, section }: TimelineEntry) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-outfit md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">{section}</h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pb-2 md:gap-10">
            <div className="sticky flex flex-col  md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm ">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
            </div>
            <div className="pl-10 pr-4 hidden md:block w-full">
              <div className="space-y-1">
                <div className="flex text-xl items-center justify-between capitalize">
                  {item.title}
                  <div className="text-sm flex items-center text-neutral-500 dark:text-neutral-500">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <div className="flex items-center text-sm  text-neutral-500 dark:text-neutral-500">
                  <p>{item.position}</p>
                </div>
                <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                  <p className="flex items-center justify-start">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </p>
                </div>
              </div>
              {item.content}{" "}
            </div>

            <div className="md:hidden relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4">
                <div>
                  <div className="flex text-xl items-center justify-between capitalize">
                    {item.title}
                    <div className="text-sm flex items-center text-neutral-500 dark:text-neutral-500">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <div className="flex items-center text-sm md:pl-20 text-neutral-500 dark:text-neutral-500">
                    <p>{item.position}</p>
                  </div>
                  <div className="flex items-center text-xs md:pl-20 text-neutral-500 dark:text-neutral-500 mt-1">
                    <p className="flex items-center justify-start">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
