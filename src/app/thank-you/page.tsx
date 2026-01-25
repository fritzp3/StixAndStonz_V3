// import PortfolioGallery from '../components/PortfolioGallery';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className='container mx-auto py-12 scroll-mt-28'>
      <div>
        <div className='mb-12 text-center mx-auto'>
          <h1 className='text-3xl font-bold mb-8 text-center'>Thank You</h1>
          <div>
            <p>
              We appreciate you reaching out. A member of our team will be in
              contact with you shortly.
            </p>
            <p className='mt-4'>
              🌿 Interested in additional services like tree trimming or
              gardening?
            </p>
            <p>We've partnered with trusted local experts who can help:</p>
            <div className='mt-12 flex justify-center items-center'>
              <div className='relative w-[200px] overflow-hidden rounded-lg mb-4'>
                <Link
                  href='https://altitudearborist.com/'
                  className='cursor-pointer'
                  target='_blank'
                >
                  <img
                    src='/assets/altitudeLOGOwebsite.jpg'
                    alt='Altitude Arborist Logo'
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <p className='text-sm'>Altitude Arborist</p>
                </Link>
              </div>
              <div className='relative w-[200px] overflow-hidden rounded-lg mb-4'>
                <Link
                  href='https://glisteningcolorado.com'
                  className='cursor-pointer'
                  target='_blank'
                >
                  <img
                    src='/assets/Glistening-Glass-horizontal.png'
                    alt='Altitude Arborist Logo'
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <p className='text-sm'>Glistening Glass</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-12 flex justify-center items-center'>
          <section id='portfolio'>
            <div className='container mx-auto'>
              {/* <PortfolioGallery /> */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
