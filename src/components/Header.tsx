import React from 'react'
import { NavigationButton } from './Buttons'
import StarRailLogo from '../assets/Logo/icons8-honkai-star-rail-logo-128.svg'
import HomeIcon from '../assets/Icons/hugeicons--home-03.svg';
import AboutIcon from '../assets/Icons/mdi--about-circle-outline.svg'
import TalentIcon from '../assets/Icons/simple-icons--talenthouse.svg'
import ShopIcon from '../assets/Icons/uil--shop.svg'

const Header = () => {
  return (
    <div className='pt-[2rem] h-[auto] w-[85%] max-w-[1960px] flex items-center justify-between'>
      <img src={StarRailLogo} alt="Honkai: Star Rail Logo" />
      <nav className='flex gap-[3.5125rem]'>
        <NavigationButton icon={HomeIcon} name="Home" />
        <NavigationButton icon={AboutIcon} name="About" />
        <NavigationButton icon={TalentIcon} name="Talent" />
        <NavigationButton icon={ShopIcon} name="Merch" />
      </nav>
    </div>
  )
}

export default Header
