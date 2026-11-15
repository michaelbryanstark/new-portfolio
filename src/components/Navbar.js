import React from "react";

const links = [
  { href: "#projects", label: "Apps" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="bg-[#061624]/90 backdrop-blur sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-5 py-3 flex flex-wrap items-center justify-between">
        <a
          className="text-lg font-bold uppercase text-[#DEB992] hover:text-white"
          href="#about"
        >
          Michael Bryan Stark
        </a>
        <button
          className="lg:hidden text-[#1BA098] px-3 py-2 border border-[#DEB992] rounded"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <ul
          className={
            "w-full lg:w-auto lg:flex flex-col lg:flex-row lg:gap-2 list-none" +
            (open ? " flex" : " hidden")
          }
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 uppercase font-bold text-[#1BA098] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
