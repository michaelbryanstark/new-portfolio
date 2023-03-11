import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-grey">
            Hi, I'm Michael.
            <br className="hidden lg:inline-block" />I'm a Full Stack Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
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
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./84143645.jpg"
          />
        </div>
      </div>
    </section>
  );
}