'use client';

import { useState } from "react";
import {FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma} from "react-icons/fa"
import {SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop} from "react-icons/si"
import { motion } from 'framer-motion';

import CountUp from 'react-countup';

import { fadeIn } from "@/variants"; 
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { PageWrapper } from "../page-wrapper";


  
  export default function About() {
    const [index, setIndex] = useState(0);
    return (
        <>
        <PageWrapper>
        <div className="h-full bg-primary/30 py-56 md:py-32 text-white text-center xl:text-left">
            <Circles style="bottom-0 right-0" />
            <div className="container mx-auto grid gap-4">
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2 
                    className="h2"
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    >
                        Who <span className="text-accent">We</span> are<span className="text-accent">.</span>
                    </motion.h2>
                <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    className="text-justify font-thin text-md">
                    <img src="/team.png" alt="" className="md:w-96 w-56 m-3 object-cover float-right inline-block" />
                      At Knacksack, we believe that being prepared for any situation is paramount. With the help of our experienced and knowledgeable instructors, we aim to equip individuals with essential survival skills that could potentially save lives. Whether it's learning how to fix a puncture, finding what's wrong with a spark plug, or administering first aid, our team of professionals is committed to providing practical and hands-on training. We understand the importance of being prepared in today's unpredictable world, and our goal is to empower individuals with the knowledge and confidence to handle any emergency or challenging situation. Join us at Knacksack and embark on a journey of self-reliance and resilience.
                      <motion.div 
                                variants={fadeIn('right', 0.6)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                    className="flex mx-auto pt-5">
                        <div className="flex flex-1 xl:gap-x-6">
                        {/* Experience */}
                                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                    <div className="
                                    text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                        <CountUp start={0} end={10} duration={5} />+
                                    </div>
                                    <div className="
                                    text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]
                                    ">Years of experience</div>
                                </div>
                                {/*  */}
                                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                    <div className="
                                    text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                        <CountUp start={0} end={10} duration={5} />+
                                    </div>
                                    <div className="
                                    text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]
                                    ">Satisfied clients</div>
                                </div>
                                {/*  */}
                                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                    <div className="
                                    text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                        <CountUp start={0} end={10} duration={5} />+
                                    </div>
                                    <div className="
                                    text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]
                                    ">Finished projects</div>
                                </div>
                                <div className="relative flex-1">
                                    <div className="
                                    text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                        <CountUp start={0} end={10} duration={5} />+
                                    </div>
                                    <div className="
                                    text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]
                                    ">Winning awards</div>
                                </div>
                        </div>
                    </motion.div>
                    </motion.div>
                    
                    {/* counters */}
                    
                </div>
            </div>
            </div>
            </PageWrapper>
        </>
    );
  };
  
  

  