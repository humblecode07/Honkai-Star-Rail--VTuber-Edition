import React from 'react'
import FireFlyBG from '../../assets/firefly-sunset-city-honkai-star-rail-moewalls-com.mp4'

const Hero = () => {
  let currWidth: number = window.innerWidth;
  let currHeight: number = window.innerHeight

  console.log(currHeight)
  console.log(currWidth)

  return (
    <section className='relative z-[-99]'>
      <div className='relative h-screen w-screen'>
        <video className={`absolute top-0 left-0 z-[-99] w-full h-full max-h-[1280px] object-cover`} src={FireFlyBG} autoPlay loop muted playsInline/>
      </div>
    </section>
  )
}

export default Hero
