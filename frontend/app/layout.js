"use client"
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import '@/styles/global.css'
import { Sora } from 'next/font/google'
import Footer from '@/components/Footer'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']

})


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>KnackSack</title>
      </head>
      <body className='`${sora.variable} font-sora`'>
            <Nav />
            <Header />

                <main className="">
                  {children}
                </main>
            <Footer />
        </body>

    </html>
  )
}
