'use client';
import Circles from "@/components/Circles";
import { PageWrapper } from "../page-wrapper";
import Bulb from "@/components/Bulb";
import WorkSlider from "@/components/WorkSlider";

import {motion} from 'framer-motion';
import { fadeIn } from "@/variants";

export default function Work() {
    return (
      <>
         <PageWrapper>
      <div className="h-full text-white py-36 flex items-center">
        <Circles style="right-0 top-0 transform -scale-y-100 scale-x-100" />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* Text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8">
               What We Done<span className="text-accent">.</span>
              </motion.h2>
              <motion.p 
                   variants={fadeIn('up', 0.4)}
                   initial="hidden"
                   animate="show"
                   exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Duis efficitur mauris rhoncus dignissim iaculis. Curabitur volutpat.
              </motion.p>
            </div>
            <motion.div 
                 variants={fadeIn('down', 0.6)}
                 initial="hidden"
                 animate="show"
                 exit="hidden"
            className="w-full xl:max-w-[65%]">
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb style="-bottom-5 -left-12 rotate-12 " />
      </div>
      </PageWrapper>
      </>
    )
  }
  