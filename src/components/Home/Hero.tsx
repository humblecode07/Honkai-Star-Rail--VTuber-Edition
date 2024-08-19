import React from 'react'
import FireFlyBG from '../../assets/firefly-sunset-city-honkai-star-rail-moewalls-com.mp4'
import SolarPlay from '../../assets/Icons/solar--play-bold.svg'
import { CallToActionButton } from '../Buttons'

const Hero = () => {

  return (
    <section className='relative'>
      <div className='relative min-h-[64rem] w-screen'>
        <video className={`absolute top-0 left-0 z-[-99] w-full h-full max-h-auto bg--video object-cover`} src={FireFlyBG} autoPlay loop muted playsInline />
        <div className='relative pl-[10%] pr-[10%] pt-[25rem] flex flex-col gap-[2.875rem]'>
          <span className='font-pacifico text-white text-[3.2rem] leading-[5rem] text--font text--shadow'>
            Connecting worlds, one unforgettable stream at a time.
          </span>
          <div className='relative z-20'>
            <CallToActionButton icon={SolarPlay} name='Learn More' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
