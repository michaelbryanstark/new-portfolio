
import React, { useState } from "react";
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
    <section id="contact" className="relative pt-20">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex flex-wrap justify-center text-[#DEB992] inline-block w-10 mb-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
    </svg>
    <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
    </>
  );
}