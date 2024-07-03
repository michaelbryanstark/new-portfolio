import React from "react";

// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

export default function About() {

//   const particlesInit = useCallback(async engine => {
//         console.log(engine);
//         await loadFull(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);
  return (

    <section id="about" className="pt-20">
      <div className="container mx-auto flex px- py-0 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">   
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#DEB992]">
            Hi, I'm Michael.
            <br className="hidden lg:inline-block" /> I'm a Full Stack Developer.
          </h1>
          <p className="mb-8 leading-relaxed text-[#DEB992]">
          I am a Software Engineer with a background in Physics and Operations Management. 
          Problem solving has always been my focus and drive to improve how things operate 
          and introduce logical systems. Throughout my career in Web Development, I have 
          learned how to oversee multiple tasks and create new solutions to streamline workflows 
          and get the job done. Using my skills in Javascript, Python, HTML, and CSS, I am able 
          to create simpler, more coherent software to meet the needs of an ever-changing environment.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-[#1BA098] border-0 py-2 px-6 focus:outline-none hover:bg-[#DEB992] rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-[#1BA098] border-0 py-2 px-6 focus:outline-none hover:bg-[#DEB992] hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg bg-[#061624] lg:w-full md:w-1/2 w-5/6 py-20">
            <a href="https://github.com/michaelbryanstark" target="_blank" rel="noreferrer">
                <img
                    className="object-cover rounded-lg object-center "
                    alt="hero"
                    src="./84143645.jpg"
                />
            </a>
        </div>
      </div>
      
      {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{ position: "absolute", top: 0 }}
            options={{
                background: {
                    opacity: {
                        value: 0.1,
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#DEB992",
                    },
                    links: {
                        color: "#DEB992",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */}
    </section>

  );
}