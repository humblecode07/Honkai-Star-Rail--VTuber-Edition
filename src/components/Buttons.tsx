import React from 'react';
import '../styles/Components/Buttons.css'

interface HeaderButtonProps {
    icon?: SVGElement;
    name: string;
}

export const NavigationButton: React.FC<HeaderButtonProps> = ({ icon, name }) => {
    const iconName: string = name.toLowerCase();

    return (
        <a
            href='https://www.vshojo.com/' className={`border-solid border-[1px] border-white bg-white rounded-full min-h-[38px] w-[38px] flex items-center justify-center nav-btn nav-btn--${iconName}`}
        >
            <img className='min-h-[18px]' src={icon} alt={`${iconName}`} />
            <span className='text-[18px] opacity-0'></span>
        </a>
    );
};

export const HamburgerButton: React.FC<HeaderButtonProps> = ({ icon, name }) => {
    const iconName: string = name.toLowerCase();

    return (
        <a
            className=''
        >
            <img className='h-[30px] w-auto' src={icon} alt={iconName} />
        </a>
    )
}
