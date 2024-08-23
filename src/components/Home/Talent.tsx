import React, { useEffect } from 'react'
import JingLiuImg from '../../assets/Talents/JingLiu.png'
import KafkaImg from '../../assets/Talents/Kafka.png'
import StelleImg from '../../assets/Talents/Stelle.png'
import March7thImg from '../../assets/Talents/March7th.png'
import SilverWolfImg from '../../assets/Talents/SilverWolf.png'

const Talent = () => {
  useEffect(() => {
    const a = Array(1001).fill(0).map((c, t) => {
      const e = t / 1000, 
            n = 3 * (1 - e) * e * e * 0.58 + e * e * e, 
            o = 3 * (1 - e) * e * e + e * e * e;
      return [n, o];
    }).reverse();
  
    const handleScroll = () => {
      const talentCont = document.querySelector('.talent-cont');
      const c = document.documentElement.clientHeight;
      const { top: t, height: e } = talentCont.getBoundingClientRect();
  
      // Calculate the scroll value where:
      // - 0 when the element is at the top of the page
      // - 1 when the element is fully in view
      const o = 1 - Math.min(Math.max((t + e - c) / e, 0), 1);
  
      // Get the closest scroll value from the precomputed array
      const m = a.find(([i]) => i <= o)[1];
      talentCont.style.setProperty('--scroll', `${m}`);
    };
  
    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the starting position
  
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      <section className='relative talent-section'>
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
            <img className='talent-image' src={March7thImg} alt="" />
          </div>
        </div>
        <div className='w-full h-full absolute flex justify-center items-center'>
          <div className='w-[25.937rem] h-[10.9375rem] mt-[24rem] flex items-center justify-center bg-[#F0CE25] rounded-xl box--shadow'>
            <span className='font-extrabold text-[6.5625rem] text-white text-center leading-[5rem] mt-[-.75rem]'>
              Meet our talents!
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Talent
