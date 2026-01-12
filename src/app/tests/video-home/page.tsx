import HomeSectionTest from './HomeSectionTest';
import Services from '../../components/Services';
import Reviews from '../../components/Reviews';
import OurProcess from '../../components/OurProcess';
import ParallaxSection from '../../components/ParalaxSection';

export default function VideoHome() {
  return (
    <>
      <HomeSectionTest />
      <Services />
      <ParallaxSection imageUrl='/assets/pexels-pixabay-261410.jpg'>
        <h1 className='text-4xl md:text-6xl font-montserrat font-bold text-center'>
          Beautiful Outdoor Spaces
        </h1>
      </ParallaxSection>
      <OurProcess />
      <Reviews />
    </>
  );
}
