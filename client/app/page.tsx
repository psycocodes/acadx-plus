import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { PulseBeams } from "@/components/ui/pulse-beams";




export default function Home() {
  const words = [
    "Decide Smartly",
    "Optimize Growth",
    "Lead Confidently",
    "Simplify Data",
    "Maximize Potential",
    "Empower Decisions",
    "Unlock Success",
    "Innovate Education",
    "Boost Efficiency",
    "Master Finances"
  ];
  
 
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-blue-300/[0.2] bg-grid-black/[0.2] flex items-center absolute top-0 z-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-auto mx-36 flex-col items-center justify-center px-4 space-y-10 z-50">
        <div className="text-6xl font-extralight text-neutral-600 dark:text-neutral-400">
          <FlipWords words={words} className="font-semibold p-0 m-0" duration={2000}/> <br />
          with <span className="bg-gradient-to-b inline-block from-blue-500 to-indigo-400 text-transparent bg-clip-text font-semibold">AcadX</span> by your side  
        </div>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white items-center px-5 text-2xl font-sans font-semibold"
      >
        <span>Get Started 🡪</span>
      </HoverBorderGradient>
      </div>
      <PulseBeams></PulseBeams>
    </div>
  );
}


