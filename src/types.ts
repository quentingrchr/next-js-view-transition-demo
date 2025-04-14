import { StaticImageData } from 'next/image';

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: StaticImageData;
  country: string;
  date: string;
  content: {
    keyFeatures: string[];
    main: string;
  };
};
