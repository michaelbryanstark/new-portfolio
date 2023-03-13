import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
  return (
    <header className="bg-[#061624] opacity-90 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-[#DEB992] mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Michael Stark
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-[#1BA098] justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Apps
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
            <SocialIcon className="nav-item" fgColor="white" url="https://www.linkedin.com/in/michaelbryanstark/" target="_blank" />
            <br></br>
            <SocialIcon className="nav-item" fgColor="white" url="https://github.com/michaelbryanstark" target="_blank"/>
      </div>
    </header>
  );
}