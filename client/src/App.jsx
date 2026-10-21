import {profile,skills,projects,experiences} from"./data";
import Hero from "./components/Hero";
import About from"./components/About";
import Navbar from"./components/Navbar";
import Skills from "./components/Skills";
import Projects from"./components/Projects";
import Journey from "./components/Journey";

function App() {
  return (
    <>
      <Navbar profile = {profile}/>
      <Hero profile= {profile} />
      <About skills = {skills}/>
      <Skills skills = {skills}/>
      <Projects projects={projects}/>
      <Journey experiences={experiences}/>
    </>
  );
}

export default App;