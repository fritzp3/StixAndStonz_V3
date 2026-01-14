import PortfolioGallery from '../components/PortfolioGallery';

export default function Portfolio() {
  return (
    <main className='container mx-auto py-12 scroll-mt-28'>
      <div>
        <div className='mb-12'>
          <h1 className='text-3xl font-bold mb-8 text-center'>Our Portfolio</h1>
          <p className='text-gray-600 text-center mx-auto'>
            From concept to completion, we guide you through every step of
            creating your dream landscape.
          </p>
        </div>
        <div className='mb-12 flex justify-center items-center'>
          <section id='portfolio'>
            <div className='container mx-auto'>
              <PortfolioGallery />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
