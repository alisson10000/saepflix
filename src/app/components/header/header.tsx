"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavHeader from '@/app/components/header/nav-header';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container mx-auto px-10 max-w-nav-header">
        <div className="flex items-center justify-between w-full h-16">
          {/* LOGO */}
          <Link href="/">
            <div
              className="flex items-center text-2xl font-bold cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <i className="bx bx-movie-play bx-tada text-main-color"></i>
              <span className={hover ? 'text-main-color' : 'text-text-color'}>SAEP</span>
              <span className={hover ? 'text-text-color' : 'text-main-color'}>FLIX</span>
            </div>
          </Link>
          <NavHeader />

          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <Image src="/header/close-menu.svg" width={30} height={30} alt="Close menu" />
              ) : (
                <Image src="/header/open-menu.svg" width={30} height={30} alt="Open menu" />
              )}
            </button>
          </div>
        </div>

        {/* NAV MENU MOBILE */}
        <div
          className={`md:hidden ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col space-y-4 items-center">
            <li className="nav-header">
              <Link href="#about" className="cursor-pointer">Início</Link>
            </li>
            <li className="nav-header">
              <Link href="#blog" className="cursor-pointer">Genêros</Link>
            </li>
            <li className="nav-header">
              <Link href="#contact" className="cursor-pointer">Sobre</Link>
            </li>
            <li className='pb-4'>
              <Link href="/login">
                <div className="btn btn-hover uppercase font-bold py-2 px-6 cursor-pointer">
                  <span className="relative z-10">Login</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};