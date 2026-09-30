import React from 'react';

import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-t border-[#22262e] bg-[#0e0f0f] backdrop-blur'>
            <div className="container mx-auto flex justify-between items-center h-18 px-4 sm:h-25 sm:px-6 lg:px-8">
                <Link href = '/' className='flex gap-3 items-center font-oswald font-bold text-sm'>
                    <Image src={logo} alt='fitlogo' height={20} />
                    <span>FITLOG</span>
                </Link>
                <p className='text-[#7b7f87] text-sm font-inter '>
                    &copy; 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;