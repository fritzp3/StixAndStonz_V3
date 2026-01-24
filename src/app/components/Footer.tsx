// src/app/components/Footer.tsx
import Link from 'next/link';
import { siFacebook, siGoogle, siYoutube, siInstagram } from 'simple-icons';

export default function Footer() {
  const Icon = ({ path, color }: { path: string; color: string }) => (
    <svg
      viewBox='0 0 24 24'
      className='h-10 w-10 fill-current'
      style={{ color }}
      aria-hidden
    >
      <path d={path} />
    </svg>
  );

  return (
    <footer className='bg-gray-900 text-gray-300 mt-16'>
      <div className='max-w-7xl mx-auto px-6 py-12 text-center'>
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
        <div className=' text-sm mb-4'>
          <Link href='/privacy-policy' className='hover:text-white'>
            Privacy Policy
          </Link>
          <span className='mx-2'>|</span>
          <Link href='/contact' className='hover:text-white'>
            Contact Us
          </Link>
        </div>
        <div className='flex flex-row justify-center'>
          <div className='flex justify-between w-96 p-6'>
            <Link
              href='https://www.facebook.com/p/Stix-Stonz-Landscaping-61563001276482/'
              target='_blank'
            >
              <Icon path={siFacebook.path} color='#1877F2' />
            </Link>
            <Link
              href='https://photos.app.goo.gl/hx69GkycE4ELDGuG8'
              target='_blank'
            >
              <Icon path={siGoogle.path} color='#4285F4' />
            </Link>
            <Link
              href='https://www.youtube.com/@StixandStonzLandscaping'
              target='_blank'
            >
              <Icon path={siYoutube.path} color='#FF0000' />
            </Link>
            <Link
              href='https://www.instagram.com/stix.and.stonz.landscaping/'
              target='_blank'
            >
              <Icon path={siInstagram.path} color='#FF0069' />
            </Link>
          </div>
        </div>
        {/* Bottom: Copyright */}
        <div className='text-xs text-gray-400 space-y-2'>
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
