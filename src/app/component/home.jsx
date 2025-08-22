"use client"
import { TypeAnimation } from "react-type-animation"

export default function Home() {
  return (
    <section
    id="home"
      className="min-h-screen flex flex-col items-center justify-center p-3 text-white">
      
      <div className="relative w-48 h-48 overflow-hidden">
        <img
          src="/ghazall.jfif"
          alt="Profile"
          className="w-full h-full object-cover rounded-full"/>
      </div>

     
      <h1 className="mt-6 md:text-4xl text-center font-bold">
        Hi, I'm <span className="text-amber-200">Ghazaleh Nezamghadiri</span>
      </h1>

      
      <TypeAnimation
        sequence={[
          "Frontend Developer", 
          2000,
          "React & Next.js Enthusiast",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="my-5 text-2xl"/>
      <p className="md:text-xl text-center ">Continuously exploring new technologies, I aim to grow as a developer while delivering impactful digital experiences</p>
    </section>
  )
}