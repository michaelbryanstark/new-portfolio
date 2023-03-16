
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#061624] body-font pt-20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex flex-wrap justify-center text-[#DEB992] mx-auto inline-block w-10 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
      <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#DEB992]">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-[#DEB992]">
            A small collection of completed projects. Currently working on many more 
            and am always looking for others to dive in to!
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {projects.map((project) => (
            <a
              href={project.link} target="_blank" rel="noreferrer"
              key={project.image}
              className="p-6">
              <div className="flex relative max-w-md">
                <img
                  alt="gallery"
                  className="absolute rounded-lg inset-0 w-full h-full object-fill object-center"
                  src={project.image}
                />
                <div className="max-w-md px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 rounded-lg opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#DEB992] mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}