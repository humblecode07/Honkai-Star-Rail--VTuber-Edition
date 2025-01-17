import TwitchIcon from '../assets/Logo/mdi--twitch.svg'
import RedditIcon from '../assets/Logo/ic--baseline-reddit.svg'
import YoutubeIcon from '../assets/Logo/mdi--youtube.svg'
import TwitterIcon from '../assets/Logo/mdi--twitter.svg'
import StarRailLogo from '../assets/Logo/icons8-honkai-star-rail-logo-128.svg'

const Footer = () => {
  return (
    <footer className='h-[22.5rem] w-screen bg-[#302c2c] flex justify-center'>
      <div className='w-full px-[5rem] py-[3.125rem] max-w-[1960px] flex justify-between text-white text-xl font-light'>
        <div className='flex gap-[3.25rem] leading-[1.75rem]'>
          <nav className='flex flex-col leading-none'>
            <span className="leading-none after:content-['\2014'] after:block after:leading-[.25rem]">Links</span>
            <a className='mt-[0.75rem]' href="">Home</a>
            <a className='mt-[0.75rem]' href="">About</a>
            <a className='mt-[0.75rem]' href="">Talent</a>
            <a className='mt-[0.75rem]' href="">Merch</a>
            <a className='mt-[0.75rem]' href="">Brand</a>
            <a className='mt-[0.75rem]' href="">Legal</a>
            <a className='mt-[0.75rem]' href="">Privacy Policy</a>
          </nav>
          <nav className='flex flex-col'>
            <span className="leading-none after:content-['\2014'] after:block after:leading-[.25rem]">Socials</span>
            <img className='h-[1.5rem] w-[1.5rem] mt-[0.75rem]' src={TwitchIcon} alt="Twitch Icon" />
            <img className='h-[1.5rem] w-[1.5rem] mt-[0.75rem]' src={RedditIcon} alt="Reddit Icon" />
            <img className='h-[1.5rem] w-[1.5rem] mt-[0.75rem]' src={YoutubeIcon} alt="Youtube Icon" />
            <img className='h-[1.5rem] w-[1.5rem] mt-[0.75rem]' src={TwitterIcon} alt="Twitter Icon" />
          </nav>
        </div>
        <div className='flex flex-col'>
          <span className="leading-none after:content-['\2014'] after:block after:leading-[.25rem]">Contact</span>
          <img src={StarRailLogo} alt="Honkai: Star Rail Logo" />
          <span className='leading-6'>Hoyoverse Inc.<br />Some Address<br />CA 1111</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
