import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-300 max-w-xl text-center mb-10">
        I’d love to hear from you! Whether you have a question, a project idea,
        or just want to say hi, feel free to reach out through any of the links
        below. Let’s connect and create something awesome together!
      </p>

      <div className="flex gap-8 text-4xl">
        <a
          href="https://www.linkedin.com/in/ghazaleh-nezamghadiri-06b626302/"
          target="_blank"
          className="hover:text-sky-500 transition">
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/GhazalehNezamghadiri"
          target="_blank"
          className="hover:text-gray-400 transition">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ghazale.ghadiri/?hl=en"
          target="_blank"
          className="hover:text-pink-500 transition" >
          <FaInstagram />
        </a>

        <a
          href="mailto:ghazalehghadiri2@gmail.com"
          target="_blank"
          className="hover:text-red-500 transition">
          <MdEmail />
        </a>

      </div>
    </section>
  )
}