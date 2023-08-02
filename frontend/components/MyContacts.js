'use client'
import { BsArrowRight } from "react-icons/bs";
import Circles from "./Circles";
import Bulb from "./Bulb";
import emailjs from '@emailjs/browser';

import { useRef } from "react";

export default function MyContacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <div className="page overflow-hidden mx-auto relative py-32">
      <Circles style="transform top-0 left-0 -scale-y-100 -scale-x-100 " />
        <div className="container mx-auto text-center xl:text-left flex items-center justify-center h-full text-white">
          {/* Text & form */}
          <div className="flex flex-col w-full max-w-lg ">
            {/* text */}
            <h2 className="h2 text-center mb-12">
              Let's <span className="text-accent">connect.</span>
            </h2>
            {/* form */}
            <form className="flex-1 flex flex-col gap-6 w-full mx-auto" ref={form}>
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="name" className="input" />
                <input type="email" placeholder="email" className="input" />
              </div>
              <input type="text" placeholder="subject" className="input" />
              <textarea className="textarea" placeholder="message">
              </textarea>
              <button className="btn rounded-full border
              border-white/50 max-w-[170px] px-8 transition-all
              duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group
              "
              onClick={sendEmail}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]" />
              </button>
            </form>
          </div>
        </div>
        <Bulb style="-right-28 -bottom-12 -rotate-12" />
      </div>
    </>
  )
}