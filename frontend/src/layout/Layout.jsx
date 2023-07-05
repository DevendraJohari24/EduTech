import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import ParticlesBackground from './background/ParticlesBackground'

export default function Layout() {
  return (
    <>
    <ParticlesBackground />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
