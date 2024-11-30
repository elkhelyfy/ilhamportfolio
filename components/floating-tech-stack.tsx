"use client";
import Image from "next/image";
// import { motion, useTime, useTransform, useMotionValue } from "framer-motion";

export default function FloatingTechStack() {
    // const time = useTime();
    // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    // const x = useMotionValue(0);
    // const y = useTransform(time, (latest) => Math.sin(latest / 1000) * 10);
    
  return (
    <div className="relative w-96 h-96 flex justify-center items-center">
      {/* Central Profile Image */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image src="/images/python.svg" alt="Profile" fill className="object-cover" />
      </div>

      {/* Logos around the central image with blur and transparency */}
      {/* Top Row */}
      <div className="absolute w-16 h-16 bg-yellow-100 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(-40deg) translate(140px) rotate(40deg)", backdropFilter: "blur(10px)", top: "20%", left: "10%" }}>
        <Image src="/images/python.svg" alt="python" height={500} width={500} />
      </div>
      <div className="absolute w-16 h-16 bg-yellow-100 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(45deg) translate(240px) rotate(-45deg)", backdropFilter: "blur(10px)", top: "20%", left: "30%" }}>
        <Image src="/images/matplotlib.svg" alt="python" height={500} width={500} />
      </div>
      <div className="absolute w-16 h-16 bg-red-200 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(90deg) translate(240px) rotate(-90deg)", backdropFilter: "blur(10px)", top: "20%", left: "50%" }}>
        <Image src="/images/pytorch.svg" alt="python" height={500} width={500} />
      </div>
      <div className="absolute w-16 h-16 bg-purple-100 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(135deg) translate(225px) rotate(-135deg)", backdropFilter: "blur(10px)", top: "20%", left: "70%" }}>
        <Image src="/images/power-bi.svg" alt="python" height={500} width={500} />
      </div>

      {/* Bottom Row */}
      <div className="absolute w-16 h-16 bg-pink-200 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(180deg) translate(90px) rotate(-180deg)", backdropFilter: "blur(10px)", bottom: "20%", left: "10%" }}>
        <Image src="/images/apache-spark.svg" alt="python" height={500} width={500} />
      </div>
      <div className="absolute w-16 h-16 bg-blue-200 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(225deg) translate(160px) rotate(-225deg)", backdropFilter: "blur(10px)", bottom: "20%", left: "30%" }}>
        <Image src="/images/pandas.svg" alt="python" height={500} width={500} />
      </div>
      <div className="absolute w-16 h-16 bg-orange-200 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(270deg) translate(170px) rotate(-270deg)", backdropFilter: "blur(10px)", bottom: "20%", left: "50%" }}>
        <Image src="/images/scikit-learn.svg" alt="python" height={500} width={500} />
      </div>
      <div className="absolute w-16 h-16 bg-orange-200 rounded-xl backdrop-blur-md bg-opacity-30 p-1" style={{ transform: "rotate(315deg) translate(160px) rotate(-315deg)", backdropFilter: "blur(10px)", bottom: "20%", left: "70%" }}>
        <Image src="/images/tensorflow.svg" alt="tensorflow" height={500} width={500} />
      </div>
    </div>
  );
}
