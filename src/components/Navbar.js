import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <header className="bg-[#061624] opacity-90 sticky top-0 z-50">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#061624] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-[#DEB992] hover:text-white"
              href="/"
            >
              Michael Bryan Stark
            </a>
            <button
              className="text-[#1BA098] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-[#DEB992] rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white"
                  href="#projects"
                >
                  <span className="ml-2 text-[#1BA098] hover:text-white">Apps</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white"
                  href="#skills"
                >
                 <span className="ml-2 text-[#1BA098] hover:text-white">Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white"
                  href="#contact"
                >
                  <span className="ml-2 text-[#1BA098] hover:text-white">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
}
