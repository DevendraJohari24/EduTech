import React from 'react'
import workingImage from "../../../assets/images/illustration-working.svg"

export default function Hero() {
  return (
    <>
    <section id="hero">
      <div className="container flex flex-col-reverse max-w-6xl mx-auto p-6 lg:flex-row mb-32 bg-gray-500 rounded-lg bg-opacity-20">
        <div className=" flex flex-col space-y-10 lg:mt-16 lg:w-1/2 ">
          <h1
            className="text-white font-alata text-5xl font-bold text-center lg:text-6xl lg:max-w-lg lg:text-left"
          >
            More than just theoretical concepts
          </h1>
          <p
            className="text-2xl text-center font-sans text-gray-400 lg:max-w-md lg:text-left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href="#"
              className="py-5 px-10 font-serif text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >Join with Us</a
            >
          </div>
        </div>

        <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <img src={workingImage} alt="" />
        </div>
      </div>
    </section>
    </>
  )
}
