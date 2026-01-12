import ContactForm from '../components/ContactForm';

export default function GetAQuote() {
  return (
    <main className='container mx-auto px-4 py-12 scroll-mt-28'>
      <div>
        <div className='mb-12'>
          <h1 className='text-3xl font-bold mb-8 text-center'>Get a Quote</h1>
          <p className='text-gray-600 text-center mx-auto'>
            From concept to completion, we guide you through every step of
            creating your dream landscape.
          </p>
        </div>
        <div className='mb-12 flex justify-center items-center'>
          <section id='get-a-quote'>
            <div className='container mx-auto'>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
