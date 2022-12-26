import React from 'react';
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="">
        <h2 className="text-3xl font-bold underline">Navbar</h2>
        <Link href="/Home"> Home </Link>
        <Link href="/About"> About </Link>
        <Link href="/Reports"> Reports </Link>
    </div>
    

  )
}

export default Navbar;