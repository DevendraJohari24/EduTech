import { SendOutlined } from '@mui/icons-material'
import { Button, Stack, TextField, TextareaAutosize } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <>
    <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 text-white">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Get In Touch
          </h2>
        </div>
        <div>

    <div className="flex flex-wrap">
      <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12">
        <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium, modi accusantium ipsum corporis quia asperiores
          dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
          autem omnis fugiat perspiciatis? Ad, veritatis.
        </p>
        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
          New York, 94126, United States
        </p>
        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
          + 01 234 567 89
        </p>
        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
          info@gmail.com
        </p>
      </div>
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <form>
           
        <Stack spacing={2}>
        <Stack direction='row' spacing={4}>
            <TextField label='First Name' variant='outlined' placeholder='John' className='w-1/2 bg-white'  />
            <TextField label='Last Name' variant='outlined' placeholder='Doe' className='w-1/2 bg-white' />
        </Stack> 
        <Stack>
            <TextField label='Email' variant='outlined' placeholder='johndoe@gmail.com' className='bg-white' />
        </Stack>
        <Stack>
            <TextField label='Phone No' variant='outlined' placeholder='1234567890' className='bg-white' />
        </Stack>
        <Stack>
            <TextareaAutosize minRows={4} maxRows={7} placeholder='Hi! John here' className="border-2 rounded-sm p-5" />
        </Stack>
        <Stack>
         <Button variant="contained" startIcon={<SendOutlined />}>Send</Button>
        </Stack>
        </Stack>
        </form>      
      </div>
    </div>
    </div>
        </div>
    </section>
    </>
  )
}
