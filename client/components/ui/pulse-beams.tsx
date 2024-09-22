"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardItem, CardContainer } from "./3d-card";

const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};
const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%",
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};
export const PulseBeams = () => {
  return (
    <div id="wrapper" className="absolute w-full h-full overflow-clip">
      <div className="flex h-[40rem] w-full items-center justify-center antialiased bg-transparent overflow-hidden relative top-10 left-80">
        {/* Core SVGs component */}
        <div className="absolute">
          <CardContainer className="inter-var">
            <CardBody className="bg-black w-[15rem] h-[15rem] no-underline group cursor-pointer relative rounded-xl dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] p-6 border">
              <CardItem
                translateZ="100"
                className="App flex items-center justify-center relative -left-1 -top-1 h-full w-full"
              >
                <svg
                  mask=" url(#mask4)"
                  fill="#5899E2"
                  width="120"
                  height="120"
                  id="logo"
                  data-name="acadx-element"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 790.26 678.81"
                >
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#55efc4", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#000000", stopOpacity: 1 }}
                      />
                    </linearGradient>
                    <mask id="mask4">
                      <rect
                        x="0"
                        y="0"
                        width="200"
                        height="160"
                        fill="url(#gradient1)"
                      />
                    </mask>
                  </defs>
                  <path d="M640.66,197.61c34.93-11.65,69.85-23.31,104.78-34.97,11.67-3.89,23.66-7.2,34.66-12.57,13.47-6.59,13.4-19.26.68-27.39-3.57-2.25-7.69-3.82-11.74-5.14-116.22-38.57-232.38-77.41-348.92-115.09-11.19-3.6-25.66-3.08-36.97.61C270.28,39.9,157.75,77.77,45.17,115.51c-11.8,3.96-28.77,4.92-28.74,20.87.03,15.75,17.01,17.2,28.74,21.24,21.09,7.33,42.54,13.67,66.65,21.28-22.02,29.23-29.35,60.12-34.18,92.24-1.18,7.96-6.2,16.49-11.86,22.5-15.88,16.91-16.91,42.79,1.02,56.93,9.39,7.43,10.62,14.89,8.56,24.95-8.48,41.76-24.89,79.54-54.71,110.79-6.53,6.81-12.47,14.18-20.64,23.47,17.49,9,32.53,16.87,47.71,24.53,14.24,7.17,27.03,3.63,38.7-5.98,20.42-16.82,33.54-38.65,34.66-64.72,1.35-30.31-1.76-60.83-1.83-91.24-.03-8.87,1.73-18.91,6.14-26.4,10.48-17.81,9.83-34.04-2.58-50.53-4.56-6.08-8.13-15.21-7.46-22.54,4.34-49.54,27.87-85.07,76.14-103.26,34.86-13.15,69.53-26.8,104.2-40.5,14.5-5.72,28.99-11.46,43.5-17.17,13.07-5.15,26.13-10.29,39.22-15.37,6.91-2.67,14.68-5.69,21.66-4.89,5.76.69,14.27,4.02,17.35,7.88.55.68.94,1.38,1.1,2.08,1.45,6.56-3.21,15.51-7.46,21.99-2.51,3.76-9.2,4.99-14.18,6.89-60,22.83-120.04,45.51-180.04,68.34-3.83,1.47-7.52,3.3-12.33,5.65-1.07.43-2.11.94-3.14,1.52-.01.01-.03.02-.05.03-.56.33-1.11.68-1.66,1.05-2.36,1.61-4.37,3.54-6.03,5.7-18.16,23.61-32.74,50.09-42.97,78.64-10.93,30.52-16.89,63.4-16.89,97.67,0,159.96,129.68,289.64,289.64,289.64s289.64-129.68,289.64-289.64c0-73.44-27.35-140.49-72.4-191.54h0Z" />
                </svg>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      <path
        d="M320 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M530 200H841C846.523 200 851 195.523 851 195V40"
        stroke="var(--slate-800)"
      />
      <path
        d="M425.5 314V373C425.5 378.523 421.023 383 415.5 383H152C146.477 383 142 387.477 142 393V466.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M493 314V373.226C493 378.749 497.477 383.226 503 383.226H760C765.523 383.226 770 387.703 770 393.226V467"
        stroke="var(--slate-800)"
      />
      <path
        d="M380 128V17C380 11.4772 384.477 7 390 7H414"
        stroke="var(--slate-800)"
      />

      {/* Gradient Beams */}

      <path
        d="M320 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="url(#grad1)"
      />
      <path
        d="M530 200H841C846.523 200 851 195.523 851 195V40"
        stroke="url(#grad2)"
      />
      <path
        d="M425.5 314V373C425.5 378.523 421.023 383 415.5 383H152C146.477 383 142 387.477 142 393V466.5"
        stroke="url(#grad3)"
      />
      <path
        d="M493 314V373.226C493 378.749 497.477 383.226 503 383.226H760C765.523 383.226 770 387.703 770 393.226V467"
        stroke="url(#grad4)"
      />
      <path
        d="M380 128V17C380 11.4772 384.477 7 390 7H414"
        stroke="url(#grad5)"
      />

      <defs>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx="851"
        cy="34"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="770"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="142"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="6.5"
        cy="398.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="420.5"
        cy="6.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
    </svg>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor="#18CCFC" stopOpacity="0"></stop>
      <stop stopColor="#18CCFC"></stop>
      <stop offset="0.325" stopColor="#6344F5"></stop>
      <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
    </>
  );
};

