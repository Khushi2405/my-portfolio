import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Experiences from "./pages/experiences/Experiences";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className = "portfolioBody">
        <Home/>
        <Experiences/>
        <Projects />
        <Skills/>
        <Contact />
      </div>
      {<Footer />}
    </div>
  );
}

export default App;
