'use client';

import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';
import { HeroMedia } from './HeroMedia';
import { ArrowBigRight, ArrowBigDown } from 'lucide-react';
import Link from 'next/link';

export default function AnimatedHeroImage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute inset-0 w-full h-full z-0 pointer-events-none'
      >
        <ImageWithFallback
          src='/assets/pexels-pixabay-280222-2400x1400-min.jpg'
          alt='Modern Home with Stone Yard Landscaping'
          className='absolute inset-0 w-full h-full object-cover'
        />
        {/* <HeroMedia
          videoSrc='https://www.pexels.com/download/video/856193/'
          imageSrc='/assets/hero-landscape.jpg'
          alt='Outdoor living and landscape design in Colorado'
          className='absolute inset-0 w-full h-full object-cover'
        /> */}
      </motion.div>

      <div className='absolute inset-0 flex items-top mt-20 lg:items-center justify-center z-10'>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className='container mx-auto max-w-3xl'
        >
          <div className='bg-black/70 text-white p-4 md:p-8 max-w-3xl'>
            <div
              className='px-4 lg:px-8'
              style={{ borderLeft: '4px solid #166534' }}
            >
              <h1 className='font-montserrat text-3xl md:text-5xl mb-5'>
                Your Colorado Outdoor Living Experts
              </h1>
              <p className='font-montserrat text-xl md:text-2xl mb-10'>
                Landscape design, hardscapes, and outdoor spaces built for
                Colorado living
              </p>
              <div className='flex gap-4 flex-wrap justify-start text-white'>
                <Link
                  href='/get-a-quote'
                  className='bg-green-700 hover:bg-green-800 rounded-[8px] p-2 px-5 inline-flex items-center gap-2 transition-colors cursor-pointer font-semibold
'
                >
                  Get a Quote
                  <ArrowBigRight size={20} />
                </Link>
                <Link
                  href='/portfolio'
                  className='bg-white hover:text-gray-700 text-gray-700 rounded-[8px] px-8 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer font-semibold'
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='absolute inset-0 flex items-end w-full'>
        <div className='bg-black/70 p-4 lg:p-4 text-white w-full text-center'>
          <div className='flex items-center justify-center gap-6'>
            <div className='font-montserrat text-xl'>
              <span>Flexible financing now available! </span>
              <span>
                Make your dream yard a reality. Affordable monthly payments,
                beautiful results.
              </span>
            </div>
            <div>
              <Link
                href='#reviews'
                className='bg-yellow-500 hover:bg-green-800 text-white px-8 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer'
              >
                More
                <ArrowBigRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
