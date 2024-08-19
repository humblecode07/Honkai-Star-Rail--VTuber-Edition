import React from 'react'
import { Parallax } from 'react-parallax'
import JingLiuImg from '../../assets/Talents/JingLiu.png'
import KafkaImg from '../../assets/Talents/Kafka.png'
import StelleImg from '../../assets/Talents/Stelle.png'
import SilverWolfImg from '../../assets/Talents/SilverWolf.png'

const Talent = () => {
  return (
    <>
      <section className='talent-section'>
        <div className='talent-cont'>
          <div className='talent bg-gradient-to-b from-white via-[#C1FBFF] to-[#AADFE2]'>
            <img className='talent-image' src={JingLiuImg} alt="" />
          </div>
          <div className='talent bg-gray-500'>
            <img className='talent-image' src={KafkaImg} alt="" />
          </div>
          <div className='talent bg-blue-300'>
            <img className='talent-image' src={StelleImg} alt="" />
          </div>
          <div className='talent bg-green-300'>
            <img className='talent-image' src={SilverWolfImg} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Talent
