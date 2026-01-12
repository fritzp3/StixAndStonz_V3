'use client';

import { motion } from 'framer-motion';
// import { ImageWithFallback } from './ImageWithFallback';
import { HeroMediaTest } from './HeroMediaTest';
import { ArrowBigRight, ArrowBigDown } from 'lucide-react';
import Link from 'next/link';

export default function AnimatedHeroImageTest() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute inset-0 w-full h-full'
      >
        {/* <ImageWithFallback
          src='/assets/pexels-pixabay-280222-2400x1400-min.jpg'
          alt='Modern Home with Stone Yard Landscaping'
          className='absolute inset-0 w-full h-full object-cover'
        /> */}
        <HeroMediaTest
          videoSrc='https://www.pexels.com/download/video/856193/'
          imageSrc='/assets/hero-landscape.jpg'
          alt='Outdoor living and landscape design in Colorado'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </motion.div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className='container mx-auto max-w-3xl'
        >
          <div className='bg-black/70 p-4 lg:p-8 max-w-3xl text-white'>
            <div
              className='lg:px-8'
              style={{ borderLeft: '4px solid #166534' }}
            >
              <h1 className='font-montserrat text-xl lg:text-5xl'>
                Your Colorado Outdoor Living Experts
              </h1>
              <p className='font-montserrat text-xl lg:text-2xl mb-8 text-white/90'>
                Landscape design, hardscapes, and outdoor spaces built for
                Colorado living
              </p>
              <div className='flex gap-4 flex-wrap justify-center lg:justify-start'>
                <button className='bg-green-700 hover:bg-green-800 text-white px-8 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer'>
                  Get a Quote
                  <ArrowBigRight size={20} />
                </button>
                <button className='bg-white hover:text-gray-800 text-gray-700 px-8 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer'>
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className='absolute inset-0 flex items-end w-full'>
        <div className='bg-black/70 p-4 lg:p-8 text-white w-full text-center'>
          <div className='flex items-center justify-center gap-6'>
            <div className='font-montserrat text-xl'>
              Flexible Financing Now Available! Make your dream yard a reality.
              Affordable monthly payments, beautiful results.
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
