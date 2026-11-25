import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-800 py-10 text-center text-sm text-[#DEB992]">
      <ul className="flex justify-center gap-3 mb-6">
        <li>
          <SocialIcon fgColor="white" url="https://github.com/michaelbryanstark" target="_blank" />
        </li>
        <li>
          <SocialIcon fgColor="white" url="https://www.linkedin.com/in/michaelbryanstark/" target="_blank" />
        </li>
      </ul>
      <p>
        © 2026{" "}
        <a href="https://github.com/michaelbryanstark" target="_blank" rel="noreferrer" className="hover:text-white">
          MichaelBryanStark™
        </a>
        . All Rights Reserved.
      </p>
      <p className="mt-1">AI is a tool for people to use, not a tool to replace people.</p>
    </footer>
  );
}
