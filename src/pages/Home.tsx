import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Talent from '../components/Home/Talent'
import Marquee from '../components/Home/Marquee'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <main className='max-w-[none]'>
        <Hero />
        <Talent />
        <Marquee />
        <Footer />
      </main>
    </>
  )
}

export default Home
