'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { FaQuoteLeft} from 'react-icons/fa'

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

// testimonial data
const testimonialData = [
  {
    image: '/testimonials/Obama.jpg',
    name: 'Barack Obama',
    position: 'President',
    message:
      "The Japanese education system is very rigorous. Students are challenged to think critically and to solve problems. This is a valuable preparation for the 21st century economy",
  },
  {
    image: '/testimonials/JohnDewey.jpg',
    name: 'Jane Doe',
    position: 'Scientist',
    message:
      "Education, therefore, is a process of living and not a preparation for future living",
  },
  {
    image: '/testimonials/BillGates.jpg',
    name: 'Bill Gates',
    position: 'Microsoft',
    message:
    "The Japanese education system is one of the best in the world. They focus on math and science, and they also teach students how to be creative and innovative"
  },
  {
    image: '/testimonials/Andy.jpg',
    name: 'Andy Hargreaves',
    position: 'Professor',
    message:
    "In Finland, within very broad government guidelines, teachers create their own curricula together across schools in every community and district. They don’t confine collaboration to their own individual schools and to just implement other people’s ideas"
  },
  {
    image: '/testimonials/Neil.jpg',
    name: 'Dr. Neil deGrasse Tyson',
    position: 'Astrophysicist',
    message:
    "The flaw in the educational system, as far as I see it, is that you live your life- the teacher and student-in quest of A’s. Yet later in life, the A is irrelevant"
  },
];

const NewTestimonialSlider = () => {
  return (
    <>
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full'>
              {/* avatar name position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center items-center'>
                  {/* avatar */}
                    <div className=" w-32 h-32 rounded-full overflow-hidden">
                      <img src={person.image}  alt='' className='w-full h-full object-cover' />
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'
                    >{person.position}</div>
                </div>
                </div>
                {/* quote & message */}
                <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>                  
                   </div>
              </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </>
  );
};

export default NewTestimonialSlider;
