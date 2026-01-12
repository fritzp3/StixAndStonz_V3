import HomeSection from './components/HomeSection';
import Services from './components/Services';
import Reviews from './components/Reviews';
import OurProcess from './components/OurProcess';
import ParallaxSection from './components/ParalaxSection';

export default function Home() {
  return (
    <>
      <HomeSection />
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
