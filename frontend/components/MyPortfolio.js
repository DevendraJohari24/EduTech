'use client';
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import WorkSlider from "@/components/WorkSlider";

import {motion} from 'framer-motion';
import { fadeIn } from "@/variants";

export default function MyPortfolio() {
  return (
    <>
    <div className="w-full h-full flex md:py-48">
        <Circles style="right-0 bottom-0" />
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row gap-x-8 items-baseline">
            {/* Text */}
            <div className="md:text-left text-center flex flex-col md:w-1/2">
              <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-white">
               Our Work <span className="text-accent">.</span>
              </motion.h2>
              <motion.p 
                   variants={fadeIn('up', 0.4)}
                   initial="hidden"
                   animate="show"
                   exit="hidden"
              className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Duis efficitur mauris rhoncus dignissim iaculis. Curabitur volutpat.
              </motion.p>
            </div>
            <motion.div 
                 variants={fadeIn('down', 0.6)}
                 initial="hidden"
                 animate="show"
                 exit="hidden"
            className="md:w-1/2 w-full px-5 md:px-0">
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb style="-left-32 -top-12 -rotate-12 transform -scale-y-100" />
      </div>
    </>
  )
}
