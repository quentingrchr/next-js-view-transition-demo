import Image, { StaticImageData } from 'next/image';
import { unstable_ViewTransition as ViewTransition } from 'react';

interface BlogCoverImageProps {
  src: StaticImageData;
  alt: string;
  id: number;
}

export function BlogCoverImage({ src, alt, id }: BlogCoverImageProps) {
  return (
    <div className="w-full h-[400px] relative mb-8 rounded-md overflow-hidden">
      <ViewTransition
        name={`blog-cover-${id}`}
        className="via-blur"
        exit="duration-200"
      >
        <Image
          className="w-full h-full object-cover"
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          priority
        />
      </ViewTransition>
    </div>
  );
}
