import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Components/Buttons.css'

interface NavigationButtonProps {
    icon?: SVGElement;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({ icon, name }) => {
    const iconName: string = name.toLowerCase();

    return (
        <a
        href='https://www.vshojo.com/' className={`border-solid border-[1px] border-black rounded-full h-[38px] w-[38px] flex items-center justify-center nav-btn nav-btn--${iconName}`}>
            <img className='h-[18px] px-[0.59375rem]' src={icon} alt={`${iconName}`} />
            <span className='text-[18px] hidden pr-[0.59375rem]'>{name}</span>
        </a>
    );
};
