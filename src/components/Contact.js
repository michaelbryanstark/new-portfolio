
import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 pt-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            width="100%"
            height="100%"
            className="absolute inset-0"
            src="./brooklyn.jpg"
            alt="brooklyn"
          />
          <div className="bg-blue-100 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-[#DEB992] tracking-widest text-xs">
                EMAIL
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                michael.starkb@gmail.com
              </p>
              <h2 className="title-font font-semibold text-[#DEB992] tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">917-854-4008</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
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
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
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
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
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
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#1BA098] border-0 py-2 px-6 focus:outline-none hover:bg-[#DEB992] rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}