
import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import emailjs from 'emailjs-com'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_2rh69zk';
      const templateId = 'template_ighzcwc';
      const userId = 'GWelQe7mDCutjawxE';
      const templateParams = {
          name,
          email,
          message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => console.log(response))
          .then(error => console.log(error))
          alert("Message Sent");

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(false);
    } else {
        alert('Please fill in all fields.');
    }
}

  return (
    <>
    <section id="contact" className="relative">
      <div className="container px-10 py-24 pt-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10  flex items-end justify-start relative">
          <img
            width="100%"
            height="100%"
            className="absolute inset-0 rounded"
            src="./brooklyn.jpg"
            alt="brooklyn"
          />
          <div className="bg-blue-100 relative px-4 py-2 rounded shadow-md">
            <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-[#DEB992] tracking-widest text-xs mt-4">
                EMAIL
              </h2>
              <p className="text-[#1BA098] leading-relaxed">
                michael.starkb@gmail.com
              </p>
              <h2 className="title-font font-semibold text-[#DEB992] tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="text-[#1BA098] leading-relaxed">
                917.854.4008
              </p>
            </div>
          </div>
        </div>
        <div
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
          <h2 className="text-[#DEB992] sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5 text-[#DEB992]">
            If you are in dire need of a website overhaul, bugs 
            that are impossible to get rid of, intrested in building 
            an app or just want to collaborate, please get in touch with me!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-[#DEB992]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098] text-[#061624] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-[#DEB992]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098] text-[#061624] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-[#DEB992]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098] h-32 text-[#061624] outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message} onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#1BA098] border-0 py-2 px-6 focus:outline-none hover:bg-[#DEB992] rounded text-lg" onClick={submit}>
            Submit
          </button>
          <span className={emailSent ? 'visible' : null}></span>
        </div>
      </div>
    </section>
    <div className="flex flex-wrap justify-center">
      <SocialIcon className="nav-item" fgColor="white" url="https://github.com/michaelbryanstark" target="_blank"/>
      <SocialIcon className="nav-item" fgColor="white" url="https://www.linkedin.com/in/michaelbryanstark/" target="_blank" />
    </div>
    <br></br>
    </>
  );
}