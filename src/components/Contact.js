import React, { useState } from "react";
import emailjs from "emailjs-com";

const inputClass =
  "w-full bg-blue-100 rounded border border-gray-700 focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098] text-[#061624] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    emailjs
      .send(
        "service_2rh69zk",
        "template_ighzcwc",
        { name, email, message },
        "GWelQe7mDCutjawxE"
      )
      .then(() => {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="relative pt-24">
      <div className="container mx-auto px-5">
        <h1 className="text-center sm:text-4xl text-3xl font-medium title-font text-[#DEB992] mb-12">
          Contact
        </h1>
        <div className="grid gap-10 md:grid-cols-2 items-stretch">
          <div className="relative rounded-lg overflow-hidden min-h-[260px] flex items-end">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="./brooklyn.jpg"
              alt="Brooklyn"
            />
            <div className="relative m-4 bg-[#061624]/85 rounded px-5 py-3">
              <h2 className="title-font font-semibold text-[#DEB992] tracking-widest text-xs">EMAIL</h2>
              <a
                href="mailto:michael.starkb@gmail.com"
                className="text-[#1BA098] hover:text-white"
              >
                michael.starkb@gmail.com
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="flex flex-col" noValidate>
            <h2 className="text-[#DEB992] sm:text-3xl text-2xl mb-2 font-medium title-font">
              Get in touch
            </h2>
            <p className="leading-relaxed mb-5 text-[#DEB992]">
              Need a website overhaul, a bug you can't shake, or an app built? Are you worried about whether or not the data that makes your website/business is secure an protected against outside threats?
              Send me a message. I live to help!
            </p>
            <label htmlFor="name" className="leading-7 text-sm text-[#DEB992]">Name</label>
            <input id="name" name="name" type="text" className={inputClass + " mb-4"}
              value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email" className="leading-7 text-sm text-[#DEB992]">Email</label>
            <input id="email" name="email" type="email" className={inputClass + " mb-4"}
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="message" className="leading-7 text-sm text-[#DEB992]">Message</label>
            <textarea id="message" name="message" className={inputClass + " h-32 resize-none mb-4"}
              value={message} onChange={(e) => setMessage(e.target.value)} />
            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start text-white bg-[#1BA098] py-2 px-6 rounded text-lg hover:bg-[#DEB992] hover:text-[#061624] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="mt-3 text-sm text-[#DEB992] min-h-[1.25rem]">
              {status === "sent" && "Thanks! Your message was sent."}
              {status === "error" && "Please fill in every field, or try again in a moment."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
