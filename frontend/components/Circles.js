"use client";

import Image from "next/image";

const Circles = ({style}) => {
  return (
    <div className={`w-[200px] xl:w-[300px]  absolute ${style} mix-blend-color-dodge animate-pulse duration-75 z-10`}>
    <Image 
    src={'/circles.png'}
    width={260}
    height={200}
    className="w-full h-full"
    alt=""
    />
  </div>
  );
};

export default Circles;
