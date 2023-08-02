'use client';

import ParticlesContainer from '@/components/ParticlesContainer';

import {motion} from 'framer-motion';

import { fadeIn } from '@/variants';
import { PageWrapper } from './page-wrapper';
import MyPortfolio from '@/components/MyPortfolio';
import MyTestimonials from '@/components/MyTestimonials';
import MyContacts from '@/components/MyContacts';

export default function Home() {
  return (
    <>
    <PageWrapper>
        <div className='w-full h-full relative  bg-gradient-to-br from-primary/10 via-black/30
          to-black/10 '>
        <ParticlesContainer />
        <section className=' relative text-white'>
          {/* text */}
          <div 
          className='w-full h-screen'>
            <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
              {/* title */}
              <motion.h1 
              variants={fadeIn('down', 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='h1 text-white'>
                Transforming Ideas <br /> Into {'  '}
                <span className='text-accent'>Digital Reality</span>
              </motion.h1>
              <motion.p 
              variants={fadeIn('down', 0.3)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </motion.p>
        
            </div>
          {/* image */}
          <div className='w-full h-full absolute right-0 bottom-0'>
            {/* bg image */}
            <div className='bg-explosion bg-contain bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge animate-pulse duration-75'>
            </div>
            {/* particles */}
          </div>
          </div>
        
        </section>
        {/* Our Vision */}
        <section id="feature">
          <div className="w-full h-full md:pl-28 container flex md:py-20 py-14 text-white mx-auto items-center justify-center">
              <div className="relative py-12 px-12 pl-28 md:max-w-4xl backdrop-blur-lg bg-primary/30 border border-l-0 z-0 mix-blend-color-dodge">
              <div className="absolute -left-64 top-0 z-20  w-96 h-96 mix-blend-color-dodge ">
                      <img src="/ai-robot-2.png" alt='' className="w-[100%] h-[100%] object-cover" />
                  </div>     
             <motion.h2 
                   className="h2"
                   variants={fadeIn('left', 0.2)}
                   initial="hidden"
                   animate="show"
                   exit="hidden"
                   >
                       Our Vision <span className="text-accent">&</span> Mission<span className="text-accent">.</span>
                   </motion.h2>
                 <motion.p      
                 variants={fadeIn('left', 0.2)}
                 className="text-md text-justify text-white font-semibold"
                   initial="hidden"
                   animate="show"
                   exit="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum quam quis augue rutrum, a euismod neque iaculis. Suspendisse quam justo, ullamcorper eu nisi ut, facilisis scelerisque ipsum. Curabitur a vehicula nisl. Ut molestie mattis dolor, non rhoncus ante dignissim ut. Cras sodales ultricies justo, vitae luctus nunc volutpat sed. Nulla nec justo eget nisl iaculis bibendum. Aenean porttitor volutpat mauris, sed aliquet enim varius in. Nunc iaculis accumsan venenatis. Mauris a odio ipsum. Sed sodales purus nec sem lacinia dapibus. Fusce commodo et justo at volutpat. Sed at lacus sed sapien tincidunt auctor sit amet eu orci. Nullam ut maximus massa. Sed vitae quam nec orci facilisis accumsan. Nulla pharetra cursus sem vel dapibus.</motion.p>
             </div>
              </div>
          
    </section>
    {/* Our Work */}
    <section id='#portfolio'>
        <div className='relative'>
            <MyPortfolio />
        </div>
    </section>
    {/* Testimonials */}
    <section id='#testimonials'>
        <div className='relative'>
          <MyTestimonials />
        </div>
    </section>
    {/* Contact Us */}
    <section>
       <div className='relative'>
       <MyContacts />
       </div>
    </section>
    </div>
        
        </PageWrapper>

    </>
  )
}
