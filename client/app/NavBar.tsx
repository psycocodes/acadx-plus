'use client'
import React from "react";
import Link from "next/link";
import { VscDashboard } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
    const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Login", href: "/login" },
    { label: "Join Us", href: "/join" }
  ];
  return (
    <nav className="flex mb-1 space-x-10 items-center h-20 px-7 justify-between">
      <Link href="/" className="z-10">
        <VscDashboard size={40} />
      </Link>
      <ul className="flex space-x-10 z-10">
        {links.map((link: {label: string, href: string}, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={classnames({
                'text-stone-400 font-bold text-xl inline-block': true,
                'hover:bg-gradient-to-r from-blue-500 via-green-400 to-indigo-400 hover:text-transparent hover:bg-clip-text': link.href !== currentPath,
                'bg-gradient-to-r from-blue-500 via-green-400 to-indigo-400 text-transparent bg-clip-text': link.href === currentPath
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
