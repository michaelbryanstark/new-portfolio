import React from "react";

export default function About() {
  return (
    <section id="about" className="pt-16 md:pt-24">
      <div className="container mx-auto px-5 flex md:flex-row flex-col-reverse items-center gap-12">
        <div className="md:w-3/5 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl font-medium text-[#DEB992]">
            Hi, I'm Michael.
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mt-3 mb-6 text-[#1BA098]">
            Full Stack Developer & Cybersecurity Student
          </h2>
          <p className="mb-8 leading-relaxed text-lg text-[#DEB992] max-w-xl">
            I'm a software engineer with a background in Physics and Operations Management, now
            studying cybersecurity to help protect data against the challenges AI poses. I like
            solving problems and building logical systems that streamline how things work, using
            all the tools and methods I have learned throughout my life .
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="text-white bg-[#1BA098] py-2 px-6 rounded text-lg hover:bg-[#DEB992] hover:text-[#061624] transition-colors"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="text-[#DEB992] border border-[#DEB992] py-2 px-6 rounded text-lg hover:bg-[#DEB992] hover:text-[#061624] transition-colors"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <a href="https://github.com/michaelbryanstark" target="_blank" rel="noreferrer">
            <img
              className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-full ring-4 ring-[#DEB992]/40"
              alt="Michael Bryan Stark"
              src="./84143645.jpg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
