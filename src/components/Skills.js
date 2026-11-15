import React from "react";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#061624] body-font pt-24">
      <div className="container px-5 py-5 mx-auto">
        <h1 className="text-center sm:text-4xl text-3xl font-medium title-font text-[#DEB992] mb-12">
          Skills & Technologies
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:w-4/5 mx-auto">
          {skillGroups.map((g) => (
            <div key={g.group} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="title-font text-lg font-medium text-[#DEB992] mb-4">{g.group}</h2>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800 text-[#1BA098]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
