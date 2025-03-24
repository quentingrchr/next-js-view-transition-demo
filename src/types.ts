export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  country: string;
  date: string;
  content: {
    keyFeatures: string[];
    main: string;
  };
};
