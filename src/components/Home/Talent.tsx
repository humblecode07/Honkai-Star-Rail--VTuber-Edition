import React, { useEffect } from 'react'
import talentData from '../../datas/talentData.json'

const shuffleCard = (arr: { src: string }[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Talent = () => {
  const shuffledTalent = shuffleCard(Object.keys(talentData))

  useEffect(() => {
    const a = Array(1001).fill(0).map((c, t) => {
      // console.log(t)
      const e = t / 1000,
        n = 3 * (1 - e) * e * e * 0.58 + e * e * e,
        o = 3 * (1 - e) * e * e + e * e * e;
        // console.log(e);
      return [n, o];
      
    }).reverse();

    const handleScroll = () => {
      const talentCont = document.querySelector('.talent-cont');
      const c = document.documentElement.clientHeight;
      const { top: t, height: e } = talentCont.getBoundingClientRect();

      const o = 1 - Math.min(Math.max((t + e - c) / e, 0), 1);

      const m = a.find(([i]) => i <= o)[1];

      console.log(t, e)

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
          {shuffledTalent.map((talent, key) => {
            const imagePath = `../../assets/Talents/${talent}.png`;
            const imageURL = new URL(imagePath, import.meta.url).href;

            return (
              <div 
                key={key} className={`talent`}
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${talentData[talent].viaColor}, ${talentData[talent].toColor})`
                }}
              >
                <img
                  className={`talent-image`}
                  style={{
                    height: `${talentData[talent].height}`,
                    minWidth: `${talentData[talent].width}`,
                    transform: `translateX(${talentData[talent].translateX}) translateY(${talentData[talent].translateY})`
                  }}
                  src={imageURL}
                  alt={talentData[talent].alt}
                />
              </div>
            )
          })}
        </div>
        <div className='w-full h-full absolute flex justify-center items-center'>
          <a href='' className='min-w-[25.937rem] h-auto mt-[24rem] flex items-center justify-center bg-[#F0CE25] rounded-xl button--talent button--border'>
            <span className='font-extrabold text-[6.5625rem] text-white text-center leading-[5rem] mt-[-.75rem]'>
              Meet our<br/>talents!
            </span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Talent
