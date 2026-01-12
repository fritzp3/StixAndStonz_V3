'use client';

import { useState } from 'react';

interface HeroMediaProps {
  videoSrc?: string;
  imageSrc: string;
  alt: string;
  className?: string;
}

export function HeroMediaTest({
  videoSrc,
  imageSrc,
  alt,
  className,
}: HeroMediaProps) {
  const [videoError, setVideoError] = useState(false);

  // If no video or video fails → show image
  if (!videoSrc || videoError) {
    return <img src={imageSrc} alt={alt} className={className} />;
  }

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload='metadata'
      poster={imageSrc}
      onError={() => setVideoError(true)}
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
  );
}
