import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'

const Home = () => {
  return (
    <>
      <Header />
      <main className='max-w-[none]'>
        <Hero />
      </main>
    </>
  )
}

export default Home
