import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Talent from '../components/Home/Talent'
import Marquee from '../components/Home/Marquee'
import Footer from '../components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'

const Home = () => {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //   })
  // }, [])

  return (
    <div data-scroll-container>
      <Header />
      <main className='max-w-[none]'>
        <Hero />
        <Talent />
        <Marquee />
      </main>
      <Footer />
    </ div>
  )
}

export default Home
