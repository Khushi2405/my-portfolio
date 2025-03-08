import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Using slim package for smaller bundle size
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Experiences from "./pages/experiences/Experiences";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
const App = () => {
    const [init, setInit] = useState(false);

    // Initialize the particles engine once
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Load the slim version of tsparticles
        }).then(() => {
            setInit(true); // Set initialization state to true
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container); // Log the container for debugging
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                      fullScreen: { enable: true, zIndex: -1 },
                      particles: {
                        number: { value: 80, density: { enable: true, area: 800 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: false },
                        size: { value: 3, random: true },
                        move: {
                          enable: true,
                          speed: 1.5,
                          direction: "none",
                          random: false,
                          straight: false,
                          outModes: { default: "out" },
                        },
                        links: {
                          enable: true,
                          distance: 150,
                          color: "#ffffff",
                          opacity: 0.3,
                          width: 1,
                        },
                      },
                      interactivity: {
                        events: {
                          onHover: { enable: true, mode: "repulse" },
                          onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                          repulse: { distance: 100, duration: 0.4 },
                          push: { particles_nb: 4 },
                        },
                      },
                      background: { color: "#1e1e1e" }, // Matches dark theme
                    }}
                />
            )}

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
        </>
    );
};

export default App;