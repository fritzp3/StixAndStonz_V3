import { ImageWithFallback } from './ImageWithFallback';
import { ArrowBigRight } from 'lucide-react';
import AnimatedHeroImage from './AnimateHeroImage';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <>
      <section className='relative h-[600px] lg:h-[700px] w-full overflow-hidden'>
        {/* Background Image */}

        <AnimatedHeroImage />
      </section>
    </>
  );
}
