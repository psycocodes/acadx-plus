import React from 'react'
import Image from 'next/image';

const AboutPage = () => {
  return (
  <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-blue-300/[0.2] bg-grid-black/[0.2] flex items-center absolute top-0 z-0">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="h-full mx-36 flex-col items-center justify-center px-4 space-y-10 z-50">
    <div className="w-full bg">
    </div>
    </div>
  </div>
  )
}

export default AboutPage