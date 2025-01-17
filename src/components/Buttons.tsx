import React from 'react';
import '../styles/Components/Buttons.css'

interface ButtonProps {
    icon?: string;
    name: string;
}

interface CallToActionButtonProps {
    icon: string,
    name: string
}

export const NavigationButton: React.FC<ButtonProps> = ({ icon, name }) => {
    const iconName: string = name.toLowerCase();

    return (
        <a
            href='https://www.vshojo.com/' className={`border-solid border-[1px] border-white bg-white rounded-full min-h-[2.375rem] w-[2.375rem] flex items-center justify-center nav-btn nav-btn--${iconName}`}
        >
            <img className='min-h-[18px]' src={icon} alt={`${iconName}`} />
            <span className='text-[18px] opacity-0'></span>
        </a>
    );
};

export const HamburgerButton: React.FC<ButtonProps> = ({ icon, name }) => {
    const iconName: string = name.toLowerCase();

    return (
        <a
            className=''
        >
            <img className='h-[30px] w-auto' src={icon} alt={iconName} />
        </a>
    )
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = () => {
    return (
        <a href='https://www.youtube.com/watch?v=r4vqr7oituE' className='h-[3.8rem] w-[12.8125rem] bg-[#FFDB29] rounded-full flex items-center justify-between cursor-pointer cta-button'>
            <div className='min-h-[2.1875rem] w-[2.1875rem] ml-[.75rem] bg-[#16171A] rounded-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="#FFDB29" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" /></svg>
            </div>
            <span className='mr-[2.8125rem] text-xl text-[#16171A] font-bold'>Learn More</span>
        </a>
    )
}
