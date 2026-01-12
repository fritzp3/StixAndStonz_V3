// src/app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 mt-16'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Top: Navigation */}
        <nav className='flex flex-wrap justify-center gap-6 mb-6 text-sm'>
          <Link href='/' className='hover:text-white'>
            Home
          </Link>
          <Link href='/#services' className='hover:text-white'>
            Services
          </Link>
          <Link href='/portfolio' className='hover:text-white'>
            Portfolio
          </Link>
          <Link href='/get-a-quote' className='hover:text-white'>
            Get a Quote
          </Link>
        </nav>

        {/* Middle: Legal links */}
        <div className='text-center text-sm mb-4'>
          <Link href='/privacy-policy' className='hover:text-white'>
            Privacy Policy
          </Link>
          <span className='mx-2'>|</span>
          <Link href='/contact' className='hover:text-white'>
            Contact Us
          </Link>
        </div>

        {/* Bottom: Copyright */}
        <div className='text-center text-xs text-gray-400 space-y-2'>
          <p>© 2025 by Stix &amp; Stonz Landscaping. All rights reserved.</p>
          <p>
            Website created by{' '}
            <a
              href='https://activecodefactory.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'
            >
              Active Code Factory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
