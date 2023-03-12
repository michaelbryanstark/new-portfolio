import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-[#061624] opacity-90 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-[#DEB992] mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Michael Stark
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-[#1BA098] justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-[#1BA098] border-0 py-1 px-3 focus:outline-none hover:bg-[#DEB992] rounded text-white mt-4 md:mt-0">
          Get In Touch
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}