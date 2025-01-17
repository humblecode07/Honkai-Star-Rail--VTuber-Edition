import { NavigationButton, HamburgerButton } from './Buttons'
import StarRailLogo from '../assets/Logo/icons8-honkai-star-rail-logo-128.svg'
import HomeIcon from '../assets/Icons/hugeicons--home-03.svg';
import AboutIcon from '../assets/Icons/mdi--about-circle-outline.svg'
import TalentIcon from '../assets/Icons/simple-icons--talenthouse.svg'
import ShopIcon from '../assets/Icons/uil--shop.svg'
import Hamburger from '../assets/Icons/icon-park-outline--hamburger-button.svg'

const Header = () => {
  return (
    <header className='absolute pt-[2rem] h-[10rem] w-full max-w-[1960px] flex items-center justify-between mx-auto my-0 mb-[5rem] px-[5rem] top-0 left-1/2 -translate-x-1/2 z-50'>
      <img className='h-[8rem] w-auto' src={StarRailLogo} alt="Honkai: Star Rail Logo" />
      <nav className='flex gap-[3.5125rem] nav-menu'>
        <NavigationButton icon={HomeIcon} name="Home" />
        <NavigationButton icon={AboutIcon} name="About" />
        <NavigationButton icon={TalentIcon} name="Talent" />
        <NavigationButton icon={ShopIcon} name="Merch" />
      </nav>
      <div className='bg-yellow-300 min-h-[36px] min-w-[36px] rounded hamburger-menu'>
        <HamburgerButton icon={Hamburger} name='Hamburger-Menu' />
      </div>
    </header>
  )
}

export default Header
