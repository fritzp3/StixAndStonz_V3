'use client';

import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHashNavigation = (hash: string) => {
    if (window.location.pathname !== '/') {
      // Navigate to Home page first
      window.location.href = `/#${hash}`;
    } else {
      // Already on Home page → scroll to section
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // close mobile menu
  };

  return (
    <header className='bg-white fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <img
              src='/assets/stixNstonz-logo.png'
              alt='Logo'
              className='h-[90px] w-auto cursor-pointer'
            />
          </Link>
          <div className='hidden lg:block'>
            <img
              src='/assets/AB-seal-horz.svg'
              alt='Logo'
              className='h-[40px] w-auto cursor-pointer'
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-4 font-montserrat text-lg lg:text-xl'>
          <button
            onClick={() => handleHashNavigation('services')}
            className='p-2'
          >
            Services
          </button>
          <Link href='/portfolio' className='p-2'>
            Portfolio
          </Link>
          <Link href='tel:303-906-7656' className='p-2'>
            303-906-7656
          </Link>
          <Link
            href='/get-a-quote'
            className='bg-green-700 hover:bg-green-800 text-white rounded-[8px] p-2 px-5 inline-flex items-center gap-2 transition-colors cursor-pointer'
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <div className='right-4 inline-flex flex-col p-4 space-y-2 font-montserrat text-lg text-white'>
            <Link
              href='tel:303-906-7656'
              className='inline-flex items-center justify-center bg-green-700 rounded-[8px] px-4 py-3 md:px-3 md:py-2'
            >
              <Phone className='text-white' size={24} />
              <div className='hidden sm:block mx-2 my-1'>303-906-7656</div>
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className='md:hidden bg-green-700 text-white flex flex-col p-4 space-y-2 font-montserrat text-lg'>
          <Link href='/' className='block' onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <button
            onClick={() => handleHashNavigation('services')}
            className='block text-left'
          >
            Services
          </button>
          <button
            onClick={() => handleHashNavigation('reviews')}
            className='block text-left'
          >
            Reviews
          </button>
          <Link
            href='/portfolio'
            className='block'
            onClick={() => setMobileOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            href='/get-a-quote'
            className='block'
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
