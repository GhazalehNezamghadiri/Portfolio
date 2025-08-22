import Header from "./component/header";
import Home from "./component/home";
import About from "./component/about";
import Projects from "./component/project";
import Contact from "./component/contact";

export default function page(){

  return(
    <> 
     
    <main className="bg-[#1D1F1F] ]">

        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>



    </main>

  
    </>

  )
}