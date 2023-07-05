import React from 'react'

export default function CreationCard({imageUrl, title, link}) {
  return (
    <div className="group relative overflow-hidden max-h-180">
        <img
        src={imageUrl}
        alt="Title"
        className="hidden w-full duration-200 md:block z-10 group-hover:scale-110"
        />
        <img
        src={imageUrl}
        className="w-full md:hidden"
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
        <h5 className="absolute text-white uppercase group-hover:text-black text-2xl font-thin px-5 z-40 bottom-4">The Curosity</h5>
  </div>
  )
}
