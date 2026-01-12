import { Home as HomeIcon, Star, ArrowBigDown } from 'lucide-react';
import Link from 'next/link';

export default function OurProcess() {
  return (
    <section id='our-process' className='py-20 bg-gray-50 scroll-mt-16'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Our Process</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            From concept to completion, we guide you through every step of
            creating your dream landscape
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='group cursor-pointer'>
            <div className='relative h-80 overflow-hidden rounded-lg mb-4'>
              <img
                src='/assets/pexels-shkrabaanthony-5243989.jpg'
                alt='Design'
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <h3 className='mb-2'>Design</h3>
            <p className='text-gray-600'>
              We create detailed plans and 3D visualizations that bring your
              vision to life
            </p>
          </div>
          <div className='group cursor-pointer'>
            <div className='relative h-80 overflow-hidden rounded-lg mb-4'>
              <img
                src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE2MzUxMDA5NXww&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Build'
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <h3 className='mb-2'>Build</h3>
            <p className='text-gray-600'>
              Our expert team brings the design to reality with quality
              craftsmanship
            </p>
          </div>
          <div className='group cursor-pointer'>
            <div className='relative h-80 overflow-hidden rounded-lg mb-4'>
              <img
                src='/assets/pexels-magic-k-24827758-6728933.jpg'
                alt='Maintain'
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <h3 className='mb-2'>Maintain</h3>
            <p className='text-gray-600'>
              Ongoing care and maintenance to keep your landscape looking its
              best year-round
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto pt-8 text-center'>
        <Link
          href='#reviews'
          className='bg-green-700 hover:bg-green-800 text-white px-8 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer'
        >
          More Info
          <ArrowBigDown size={20} />
        </Link>
      </div>
    </section>
  );
}
