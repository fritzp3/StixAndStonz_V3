interface ParallaxSectionProps {
  imageUrl: string;
  height?: string;
  children?: React.ReactNode;
}

export default function ParallaxSection({
  imageUrl,
  height = 'h-[500px]',
  children,
}: ParallaxSectionProps) {
  return (
    <section
      className={`
        relative w-full ${height}
        bg-center bg-cover bg-no-repeat
        bg-fixed
      `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay (optional) */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center text-white'>
        {children}
      </div>
    </section>
  );
}
