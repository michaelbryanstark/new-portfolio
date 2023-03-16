import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <div className="flex flex-wrap justify-center"> 
            <footer class=" bg-[#061624] rounded-lg shadow m-4 pb-60">
            <ul class="flex flex-wrap justify-center">
                <li>
                    <SocialIcon className="nav-item" fgColor="white" url="https://github.com/michaelbryanstark" target="_blank"/>
                </li>
                <li>
                    <SocialIcon className="nav-item" fgColor="white" url="https://www.linkedin.com/in/michaelbryanstark/" target="_blank" />
                </li>
            </ul>
                <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-[#DEB992] sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">MichaelBryanStark™</a>
                <p>All Rights Reserved.</p>
                </span>
                </div>
            </footer>
        </div>
    );
}