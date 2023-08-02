'use client'

import {motion} from "framer-motion";
import { fadeIn } from "@/variants";
import Circles from "./Circles";
import NewTestimonialSlider from "./NewTestimonialSlider";

export default function MyTestimonials() {
  return (
    <>
      <div className="h-full py-40 text-center text-white">
         <Circles style="top-0 right-0 transform -scale-y-100" />
          <div className="container mx-auto h-full flex flex-col justify-center">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-8 xl:mb-0">
              What we <span className="text-accent">believe.</span>
            </motion.h2>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            >
              <NewTestimonialSlider />
            </motion.div>
          </div>
          <Circles style="bottom-0 transform -scale-x-100" />
        </div>
    </>
  )
}
