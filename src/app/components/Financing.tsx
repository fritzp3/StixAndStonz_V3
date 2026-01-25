'use client';

import Link from 'next/link';
import { ArrowBigRight, ArrowBigDown } from 'lucide-react';

import { useEffect, useState } from 'react';
import Drawer from './Drawer';

export default function Financing() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDrawerOpen(true);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='financing'>
      <div className='inset-0 flex items-end w-full'>
        <div className='bg-black p-4 lg:p-4 text-white w-full text-center'>
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
                href='/get-a-quote'
                className='bg-yellow-500 hover:bg-green-800 text-white rounded-[8px] px-8 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer'
              >
                More
                <ArrowBigRight size={20} />
              </Link>
            </div>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <h3 className='text-xl font-semibold text-black mb-2'>
                Financing Available
              </h3>
              <div>
                <p className='text-gray-600 text-lg'>
                  We now offer financing options to help bring your landscaping
                  dreams to life!
                </p>
                <div className='flex flex-row gap-4 justify-center items-center mt-8'>
                  <div>
                    <Link
                      href='/get-a-quote'
                      className='bg-green-700 hover:bg-green-800 text-white rounded-[8px] px-6 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer'
                    >
                      More
                      <ArrowBigRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
}
