'use client';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

type Category = 'all' | 'residential' | 'commercial' | 'gardens' | 'hardscape';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  images: string[];
}

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: { label: string; value: Category }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Gardens', value: 'gardens' },
    { label: 'Hardscape', value: 'hardscape' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Garden Sanctuary',
      category: 'residential',
      image:
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220630_114742-1080.810.jpg',
      description: 'Contemporary residential landscape with native plantings',
      images: [
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220628_112518-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220630_114729-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220630_114742-1080.810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220630_114745-1080x801.jpeg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220630_114747-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220716_1150-1080x810.jpg ',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220716_115032-608x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220716_115036-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220716_115041-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220716_115048-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/modern-backyard-sanctuary/20220716_115053-1080x810.jpg',
      ],
    },
    {
      id: 2,
      title: 'Leveled Retaining Walls',
      category: 'commercial',
      image:
        'https://cdn.stixandstonzlandscaping.com/projects/leveled-retaining-walls/20221107_104644-1080x810.jpg',
      description: 'Commercial landscape for downtown development',
      images: [
        'https://cdn.stixandstonzlandscaping.com/projects/leveled-retaining-walls/20221107_104644-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/leveled-retaining-walls/20221107_104647-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/leveled-retaining-walls/20221107_104704-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/leveled-retaining-walls/20221107_104707-1080x810.jpg',
      ],
    },
    {
      id: 3,
      title: 'Fireplace Patio Seating',
      category: 'hardscape',
      image:
        'https://cdn.stixandstonzlandscaping.com/projects/fireplace-patio-seating/103947.jpeg',
      description: 'Custom patio with outdoor kitchen and seating areas',
      images: [
        'https://cdn.stixandstonzlandscaping.com/projects/fireplace-patio-seating/103944.jpeg',
        'https://cdn.stixandstonzlandscaping.com/projects/fireplace-patio-seating/103945.jpeg',
        'https://cdn.stixandstonzlandscaping.com/projects/fireplace-patio-seating/103947.jpeg',
        'https://cdn.stixandstonzlandscaping.com/projects/fireplace-patio-seating/103950.jpeg',
        'https://cdn.stixandstonzlandscaping.com/projects/fireplace-patio-seating/103951.jpeg',
      ],
    },
    {
      id: 4,
      title: 'Pavers and Pathways',
      category: 'gardens',
      image:
        'https://cdn.stixandstonzlandscaping.com/projects/pavers-and-pathways/20180717_091609-1600x810.jpg',
      description: 'Natural stone pathways through perennial gardens',
      images: [
        'https://cdn.stixandstonzlandscaping.com/projects/pavers-and-pathways/20180717_091609-1600x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/pavers-and-pathways/20180828_115958-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/pavers-and-pathways/20181205_082039-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/pavers-and-pathways/20181205_082106-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/pavers-and-pathways/20181221_140821-1080x810.jpg',
      ],
    },
    {
      id: 5,
      title: 'Backyard Sanctuary',
      category: 'residential',
      image:
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105925-h810.jpg',
      description: 'Eco-friendly design with rainwater harvesting',
      images: [
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105925-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105829-1080x810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105840-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105850-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105901-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105903-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105935-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105940-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/backyard-sanctuary/20190426_105952-h810.jpg',
      ],
    },
    {
      id: 6,
      title: 'Small Yard Space',
      category: 'gardens',
      image:
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084829-h810.jpg',
      description: 'Lush garden design with diverse plant palette',
      images: [
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084603-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084611-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084632-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084635-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084640-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084829-h810.jpg',
        'https://cdn.stixandstonzlandscaping.com/projects/small-yard-space/20190808_084851-h810.jpg',
      ],
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='mb-6'>Our Portfolio</h1>
          <p className='text-xl text-gray-600'>
            Explore our collection of award-winning landscape architecture
            projects
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <section className='py-8 border-b border-gray-200'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.value
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className='py-16 lg:py-24'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className='group cursor-pointer'
                onClick={() => openModal(project)}
              >
                <div className='relative h-80 overflow-hidden rounded-lg mb-4'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                      <p className='text-sm text-white/80 mb-1'>
                        {project.category.charAt(0).toUpperCase() +
                          project.category.slice(1)}
                      </p>
                      <h3 className='text-white mb-2'>{project.title}</h3>
                      <p className='text-sm text-white/90'>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className='mb-2'>{project.title}</h3>
                <p className='text-gray-600'>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10'
          >
            <X size={32} />
          </button>

          <div
            className='relative max-w-5xl w-full'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className='relative h-[70vh] bg-black rounded-lg overflow-hidden'>
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${
                  currentImageIndex + 1
                }`}
                className='w-full h-full object-contain'
              />

              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors'
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors'
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full'>
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* Project Info */}
            <div className='bg-white rounded-lg mt-4 p-6'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full'>
                  {selectedProject.category.charAt(0).toUpperCase() +
                    selectedProject.category.slice(1)}
                </span>
              </div>
              <h2 className='mb-2'>{selectedProject.title}</h2>
              <p className='text-gray-600'>{selectedProject.description}</p>
            </div>

            {/* Thumbnail Navigation */}
            {selectedProject.images.length > 1 && (
              <div className='flex gap-2 mt-4 overflow-x-auto pb-2'>
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-green-700 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className='py-16 lg:py-24 bg-green-700 text-white'>
        <div className='container mx-auto px-4 lg:px-8 text-center'>
          <h2 className='text-white mb-4'>Let's Create Your Dream Landscape</h2>
          <p className='text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
            See how we can transform your outdoor space into something
            extraordinary
          </p>
          <button className='bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors'>
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}
