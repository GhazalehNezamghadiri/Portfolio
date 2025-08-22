'use client'
import { motion } from "framer-motion"

const projects = [
  {
    title: "Shop",
    description: "A stylish watch store built with Next.js, Zustand, and MUI, offering a smooth and responsive shopping experience.",
    image: "/shop.png",
    demo: "https://shop-orpin-two.vercel.app/",
  
  },
  {
    title: "Admin-panel",
    description: "A clean admin dashboard with Next.js and APIs to manage users and content easily.",
    image: "/admin.png",
    demo: "https://admin-panel-weld-ten.vercel.app/home",
    
  },
  {
    title: "Music-player",
    description: "Music player built with Js and Tailwind CSS, featuring track navigation and a responsive.",
    image: "/music.png",
    demo: "https://ghazalehnezamghadiri.github.io/Music-player/",
   
  },
  {
    title: "Parallax",
    description: "Parallax website built with JavaScript and Tailwind CSS, featuring smooth scrolling effects and interactive visuals.",
    image: "/para.png",
    demo: "https://ghazalehnezamghadiri.github.io/Parallax2/",
   
  },
  {
    title: "Parallax",
    description: "Parallax website built with GSAP and Tailwind CSS for smooth animations and scrolling effects.",
    image: "/para2.png",
    demo: "https://ghazalehnezamghadiri.github.io/Parallax/",
   
  },
  {
    title: "Country-Info",
    description: "Country info app built with Next.js and APIs to display details about countries.",
    image: "/country.png",
    demo: "https://your-blog-demo.com",
   
  },
  {
    title: "WeatherApp-API",
    description: "Weather application built with Next.js and APIs, providing real-time weather updates, forecasts, and a responsive design.",
    image: "/weather.png",
    demo: "https://ghazalehnezamghadiri.github.io/WeatherApp-API/",
   
  },
  {
    title: "SignUp-LogIn",
    description: "Signup and login system with full CRUD functionality, built using Next.js and APIs for secure and responsive user management.",
    image: "/sign.png",
    demo: "https://ghazalehnezamghadiri.github.io/SignUp-LogIn/",
   
  },
  {
    title: "Espinas palace",
    description: "Responsive hotel website built with Tailwind CSS, featuring a clean design and modern UI.",
    image: "/hotel.png",
    demo: "https://your-blog-demo.com",
   
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen  text-white px-6 py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.4 }}
            viewport={{ once: false }} >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"/>
            <div className="p-5 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  className="">
                  Live Demo
                </a>

              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}