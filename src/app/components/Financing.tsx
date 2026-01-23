import Link from 'next/link';
import { ArrowBigRight, ArrowBigDown } from 'lucide-react';

export default function Financing() {
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
          </div>
        </div>
      </div>
    </section>
  );
}
