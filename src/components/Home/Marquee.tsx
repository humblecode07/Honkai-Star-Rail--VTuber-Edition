// import React from 'react'
import { motion } from 'framer-motion'
import CapcomLogo from '../../assets/Logo/Capcom-Logo.wine.svg'
import FunimationLogo from '../../assets/Logo/Funimation-Logo.wine.svg'
import NamcoLogo from '../../assets/Logo/Namco-Logo.wine.svg'
import NintendoLogo from '../../assets/Logo/Nintendo-Logo.wine.svg'
import SegaLogo from '../../assets/Logo/Sega-Logo.wine.svg'
import SquareEnixLogo from '../../assets/Logo/Square_Enix-Logo.wine.svg'

const Marquee = () => {
  const marquee = {
    initial: {
      x: "0%"
    },
    animate: {
      x: "-100%",
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      }
    }
  }

  return (
    <section className='h-[8.25rem] w-screen flex relative overflow-hidden whitespace-nowrap bg-black'>
      <motion.div
        className='flex'
        initial="initial"
        animate="animate"
        variants={marquee}
      >
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={CapcomLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={FunimationLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={NamcoLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={NintendoLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={SegaLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={SquareEnixLogo} alt="Capcom Logo" />
        </div>
      </motion.div>
      <motion.div
        className='flex'
        initial="initial"
        animate="animate"
        variants={marquee}
      >
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={CapcomLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={FunimationLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={NamcoLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={NintendoLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={SegaLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={SquareEnixLogo} alt="Capcom Logo" />
        </div>
      </motion.div>
      <motion.div
        className='flex'
        initial="initial"
        animate="animate"
        variants={marquee}
      >
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={CapcomLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={FunimationLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={NamcoLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={NintendoLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={SegaLogo} alt="Capcom Logo" />
        </div>
        <div className='min-w-[160px] mx-[2rem]'>
          <img className='h-[8.25rem]' src={SquareEnixLogo} alt="Capcom Logo" />
        </div>
      </motion.div>
    </section>
  )
}

export default Marquee
