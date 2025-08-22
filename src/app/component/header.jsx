export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full  text-gray-200 shadow-md z-50">
      <nav className="max-w-4xl mx-auto flex justify-center space-x-10 py-4 text-lg">
        <a href="#home" className="hover:text-amber-200 transition">Home</a>
        <a href="#about" className="hover:text-amber-200 transition">About</a>
        <a href="#projects" className="hover:text-amber-200 transition">Projects</a>
        <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
      </nav>
    </header>
  )
}