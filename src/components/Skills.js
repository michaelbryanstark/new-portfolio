

import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#061624] body-font pt-20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex flex-wrap justify-center text-[#DEB992] mx-auto inline-block w-10 mb-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">

          <h1 className="sm:text-4xl text-3xl font-medium title-font text-[#DEB992] mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[#DEB992]">
            This is a short list of my most comfortable skills. I am always learning more and 
            will update as I add more programming languages to my skillset. 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skills) => (
            <div key={skills.skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">

                <span className="title-font font-medium text-[#1BA098]">
                  {skills.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}