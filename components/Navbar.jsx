import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/CompSearchLogoGreen.png';

const Navbar = ({ darkTheme, setDarkTheme }) => (
  <div className="py-2 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
    <div className="flex justify-around items-center space-x-5 w-screen ">
      <Link href="/"><Image src={logo} alt="logo" /></Link>
      <Link href="/about" className="font-bold text-lg"> About </Link>
      <Link href="/reports" className="font-bold text-lg"> Reports </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '💡 Light' : '🌙 Dark'}</button>
    </div>
  </div>
);

export default Navbar;
