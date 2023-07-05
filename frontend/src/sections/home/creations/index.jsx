import React from 'react'
import CreationCard from '../../../components/CreationCard'
import sampleImage from "../../../assets/images/desktop/image-fisheye.jpg"

export default function Creations() {
  return (
    <>
     <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-white md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="hidden btn md:block border-2 w-40 text-lg text-center border-black">See All</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
            <CreationCard title="The curiosity" imageUrl={sampleImage} />
            <CreationCard title="The curiosity" imageUrl={sampleImage} />
            <CreationCard title="The curiosity" imageUrl={sampleImage} />
            <CreationCard title="The curiosity" imageUrl={sampleImage} />
            <CreationCard title="The curiosity" imageUrl={sampleImage} />
        </div>
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
    </>
  )
}
