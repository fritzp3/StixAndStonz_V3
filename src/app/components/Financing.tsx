import {
  Sprout,
  Home as HomeIcon,
  Building2,
  Trees,
  Fence,
  Lightbulb,
  ArrowBigDown,
} from 'lucide-react';
import Link from 'next/link';

export default function Financing() {
  const financing = [
    {
      icon: HomeIcon,
      title: 'Residential Landscape Design',
      description:
        'Custom landscape designs for private homes, from intimate courtyards to expansive estates.',
    },
    {
      icon: Building2,
      title: 'Commercial Landscaping',
      description:
        'Professional landscape solutions for businesses, corporate campuses, and commercial properties.',
    },
    {
      icon: Trees,
      title: 'Sustainable Design',
      description:
        'Eco-friendly landscape solutions that conserve water, support local wildlife, and reduce environmental impact.',
    },
    {
      icon: Fence,
      title: 'Hardscape Design',
      description:
        'Expert design and installation of patios, walkways, retaining walls, and other structural landscape elements.',
    },
    {
      icon: Sprout,
      title: 'Planting Design',
      description:
        'Thoughtful selection and arrangement of trees, shrubs, perennials, and ground covers.',
    },
    {
      icon: Lightbulb,
      title: 'Landscape Lighting',
      description:
        'Strategic lighting design that enhances safety, security, and ambiance after dark.',
    },
  ];

  return (
    <section id='financing' className='py-20 bg-white scroll-mt-14'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Financing</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          Financing info...
        </div>
      </div>
      <div className='container mx-auto p-4 text-center'>
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
