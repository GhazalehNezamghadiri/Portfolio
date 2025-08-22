'use client'

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center text-white px-6">
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-36 max-w-5xl"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}>
        
        <img
          src="/lan.jfif"
          className="w-96 h-96 object-cover"
          alt="Ghazaleh Nezamghadiri"/>

       
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

      
          <motion.p
            className="text-gray-300 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}>
            Hi! I’m Ghazaleh Nezamghadiri, and I love coding and building beautiful websites. 
            Using tools like Tailwind CSS, Next.js, React, and JavaScript, I enjoy creating user-friendly and visually appealing web experiences. 
            Every project is a chance for me to get creative and make the web a little more awesome!
          </motion.p>

      
          <span className="text-2xl font-semibold mb-5">These are the tools and languages I’ve been using along the way</span>
          <ul className="grid grid-cols-2 gap-2">
            <li className="px-4 py-2 bg-green-500 text-white rounded-full text-center">HTML</li>
            <li className="px-4 py-2 bg-blue-500 text-white rounded-full text-center">CSS</li>
            <li className="px-4 py-2 bg-purple-500 text-white rounded-full text-center">Bootstrap</li>
            <li className="px-4 py-2 bg-sky-600 text-white rounded-full text-center">Tailwind CSS</li>
            <li className="px-4 py-2 bg-yellow-400 text-black rounded-full text-center">JavaScript ES6+</li>
            <li className="px-4 py-2 bg-cyan-400 text-black rounded-full text-center">React.js</li>
            <li className="px-4 py-2 bg-gray-700 text-white rounded-full text-center">Next.js</li>
            <li className="px-4 py-2 bg-indigo-500 text-white rounded-full text-center">RESTful APIs</li>
            <li className="px-4 py-2 bg-gray-500 text-white rounded-full text-center">Github</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}