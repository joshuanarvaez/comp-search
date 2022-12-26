import React from 'react';
import Link from "next/link";


const Navbar = () => {
    const links = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About"
  },
  {
    href: "/reports",
    label: "Reports"
  }
];

  return (
    <nav>
      {links.map(link => (
        <Link href={link.href} key={link.href} className="font-bold px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-md">
            {link.label}
        </Link>
      ))}
    </nav>
    

  )
}

export default Navbar;