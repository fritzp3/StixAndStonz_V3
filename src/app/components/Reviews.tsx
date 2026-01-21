import { Home as HomeIcon, Star, ArrowBigDown } from 'lucide-react';
import Link from 'next/link';

export default function Reviews() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Denver, CO',
      text: 'GreenScape transformed our backyard into a stunning xeriscape oasis. The design is both beautiful and sustainable, saving us thousands on water bills.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      location: 'Boulder, CO',
      text: 'The attention to detail and professionalism was outstanding. They turned our vision into reality and exceeded all expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      location: 'Colorado Springs, CO',
      text: 'We love our new outdoor living space! The team was responsive, creative, and delivered exactly what we wanted on time and within budget.',
      rating: 5,
    },
  ];

  return (
    <section id='reviews' className='py-20 bg-gray-50 scroll-mt-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          What Our Customers Say
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-white rounded-lg p-6 shadow-sm'>
            <div className='flex gap-1 mb-4'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className='text-yellow-500 fill-yellow-500'
                  size={20}
                />
              ))}
            </div>
            <p className='text-gray-600 mb-4'>{testimonial.text}</p>
            <div>
              <p className='text-gray-900'>{testimonial.name}</p>
              <p className='text-gray-500 text-sm'>{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='container mx-auto p-4 text-center'>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link
            href='/portfolio'
            className='bg-green-700 hover:bg-green-800 text-white rounded-[8px] py-3 px-5 inline-flex items-center gap-2 transition-colors cursor-pointer'
          >
            View Our Portfolio
          </Link>

          <Link
            href='/get-a-quote'
            className='bg-green-700 hover:bg-green-800 text-white rounded-[8px] py-3 px-5 inline-flex items-center gap-2 transition-colors cursor-pointer'
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
